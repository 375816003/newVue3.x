<template>
  <div id="login">
    <template>
      <header id="logo">
        <div class="website-title clearfix">
          <img src="@/assets/images/login/logo.png" class="logo-img">
          <div class="website-title-text">怡诺智能慢病管理系统</div>
        </div>
        <div class="notice-div clearfix">
          <img src="@/assets/images/login/notice.png" class="notice-img">
          <div class="notice-text">{{ noticeContent }}</div>
        </div>
      </header>

      <div class="login-content clearfix">
        <!--组件-->
        <login-bg></login-bg>
        <div class="login-content-div">
          <div id="login-content">
            <div class="content-title clearfix">
              <div class="select">普通登录</div>
            </div>
            <hr>
            <div class="login-message clearfix">{{loginMessage}}</div>
            <el-form
              autocomplete="on"
              :model="loginForm"
              :rules="loginRules"
              ref="loginForm"
              label-position="left"
              label-width="0px"
              class="login-form"
            >
              <div class="form-group clearfix">
                <div class="form-label">
                  <img src="@/assets/images/login/username.png">
                </div>
                <div>
                  <el-form-item prop="username" class="userNameClass">
                    <el-input v-model="loginForm.username" placeholder="用户名" size="large" clearable></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="form-group clearfix">
                <div class="form-label">
                  <img src="@/assets/images/login/password.png">
                </div>
                <div>
                  <el-form-item prop="password" class="userNameClass">
                    <el-input
                      v-model="loginForm.password"
                      :type="showType"
                      placeholder="密码"
                      size="large"
                      @keyup.native.enter="handleLogin"
                    ></el-input>
                    <i
                      class="clearName"
                      @click="showTypeFun"
                      :class="(showType == 'text')?'hide':'show'"
                    ></i>
                  </el-form-item>
                </div>
              </div>
            </el-form>
            <div>
              <el-button
                type="primary"
                style="width:100%;"
                :loading="loading"
                @click.native.prevent="handleLogin"
              >登录</el-button>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="qrcode-div">
          <div class="qrcode"></div>
          <div class="text">怡诺医生App</div>
        </div>
        <div class="link">
          <a v-for="website in websites" :key="website.url" :href="website.url" target="_blank">{{website.name}}</a>
        </div>
        <div class="copyright">
          <span>客服电话 {{information.tel}}</span>
          <span style="margin: 0 7px;">|</span>
          <span>{{information.ICP}}</span>
        </div>
      </footer>
    </template>
  </div>
</template>

<script>
import loginBg from "./loginBg";
import session from "storage";
import SysUtil from "utils/sysUtil";
export default {
  data() {
    return {
      showType: "password",
      websites:[],
      loginForm: {
        username: "admin",
        password: "admin"
      },
      loginRules: {
        username: {
          required: true,
          trigger: "blur",
          message: "请输入用户名"
        },
        password: {
          required: true,
          trigger: "blur",
          message: "请输入密码"
        }
      },
      loading: false,
      loginMessage: "",
      noticeContent: "",
      isNoticePlay: false,
      noticeTextHeight: 0,
      information:{}
    };
  },
  mounted() {
    this.setCompany();
    this.setQRCode();
  },
  methods: {
    showTypeFun() {
      if (this.showType === "text") {
        this.showType = "password";
      } else {
        this.showType = "text";
      }
    },
    handleLogin() {
      this.loginMessage = "";
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.toLogin();
        }
      });
    },
    async toLogin() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        //定义参数对象
        let params = this.loginForm;
        let res = await this.$api.login.getToken(params);
        let userRes= await this.$api.login.getInitInfo({token:res.data}); 
        console.log(userRes);
      } catch (e) {
        console.log(e)
      }
    },

    noticePlay(noticeTop) {
      let noticeTextHeight = this.noticeTextHeight;
      if (noticeTop === undefined) {
        noticeTop = 18;
      }
      let $text = $(".notice-text");
      $text.finish();
      $text.animate(
        {
          top: -noticeTextHeight
        },
        (noticeTop + noticeTextHeight) * 80,
        () => {
          $text.css("top", "100%");
          this.noticePlay();
        }
      );
    },
    setQRCode(){
      let url = window.location.href;
      let $qrcode = $(".qrcode");
      new this.$QRCode($qrcode[0], {
        text: url,
        width: 80,
        height: 80,
        colorDark: "#000000",
        colorLight: "#ffffff"
      });
    },
    setCompany(){
      // profile 文件夹 各种本地文案及配置 使用方法 例如：this.$profile.company('websiteAbout')；
      this.websites = this.$profile.company('websiteAbout');
      this.information = this.$profile.company('information');
    }
  },
  created() {
   
  },
  updated() {
    if (!this.isNoticePlay) {
      return;
    }
    this.isNoticePlay = false;

    let $text = $(".notice-text");
    let noticeTextHeight = $text.height();
    this.noticeTextHeight = noticeTextHeight;
    $text.css("top", 0);
    this.noticePlay(0);
  },
  components: {
    loginBg
  }
};
</script>

<style lang="scss" scoped>
#login {
  position: relative;
  min-height: 546px;
  width: 100%;
  min-width: 1000px;
  #logo {
    width: 1000px;
    height: 80px;
    margin: auto;
    .website-title {
      .logo-img {
        margin-top: 25px;
        margin-left: 15px;
        transform: scale(1.2);
        float: left;
        // width: 150px;
      }
      .website-title-text {
        padding-top: 24px;
        margin-left: 30px;
        font-weight: 700;
        font-size: 22px;
        color: $lightBlue;
        float: left;
      }
    }
    .notice-div {
      left: 900px;
      float: right;
      width: 360px;
      height: 18px;
      overflow: hidden;
      .notice-img {
        float: left;
        margin-right: 10px;
        vertical-align: middle;
      }
      .notice-text {
        position: relative;
        float: left;
        width: 320px;
        font-size: 16px;
        line-height: 18px;
        color: $colorText;
      }
    }
  }
  .login-content {
    min-width: 620px;
    height: 410px;
    width: 100%;
    position: relative;
    padding: 0;
    .login-content-div {
      position: relative;
      width: 1000px;
      height: 100%;
      margin: auto;
      #login-content {
        .clearName {
          display: none;
          position: absolute;
          width: 18px;
          height: 15px;
          cursor: pointer;

          right: 10px;
          &.hide {
            top: 16px;
            background: no-repeat;
            background-image: url(~@/assets/images/login/pwd-hide.png);
          }
          &.show {
            top: 13px;
            background: no-repeat;
            background-image: url(~@/assets/images/login/pwd-show.png);
          }
        }
        .userNameClass {
          cursor: pointer;
          &:hover {
            .clearName {
              display: block;
            }
          }
        }
        width: 360px;
        height: 380px;
        position: absolute;
        top: 50%;
        right: 0;
        background-image: url(~@/assets/images/login/touying.png);
        transform: translate(0, -50%);
        padding: 22px 25px;
        z-index: 700;
        > div {
          width: 100%;
          .login-btn {
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #0091ff;
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 18px;
            margin-top: 16px;
          }
        }
        .content-title {
          font-size: 16px;
          text-align: center;
          .select {
            color: $colorHover;
          }
          > div {
            float: left;
            width: 50%;
            cursor: pointer;
          }
        }
        hr {
          margin-top: 17px;
          margin-bottom: 12px;
          border: none;
          border-top: 1px solid #eee;
        }
        .login-message {
          line-height: 23px;
          min-height: 48px;
          color: red;
          > div {
            width: 100%;
          }
        }
        .login-form {
          margin-top: 10px;
          .form-group {
            width: 100%;
            height: 40px;
            margin-bottom: 20px;
            .form-label {
              width: 40px;
              background-color: #f3f3f3;
              text-align: center;
              border: 1px solid #ccc;
              height: 100%;
              line-height: 40px;
              img {
                vertical-align: middle;
              }
            }
            .el-input {
              width: 265px;
              .el-input__inner {
                height: 40px;
              }
            }
            > div {
              float: left;
            }
          }
        }
        .login-handler {
          height: 22px;
          line-height: 18px;
          margin-bottom: 15px;
        }
      }
    }
  }
  .footer {
    width: 1000px;
    height: 115px;
    margin: auto;
    position: relative;
    > div {
      color: #959595;
    }
    .qrcode-div {
      position: absolute;
      top: 10px;
      left: 80px;
      > .text {
        text-align: center;
        color: #000000;
        margin-top: 5px;
        font-size: 12px;
      }
    }
    .link {
      height: 53px;
      line-height: 53px;
      min-width: 620px;
      text-align: center;
      > a {
        padding: 0 10px;
        font-size: 12px;
        color: #959595;
        &:hover {
          color: #0091ff;
        }
      }
    }
    .copyright {
      font-size: 11px;
      margin: auto;
      height: 33px;
      min-width: 620px;
      text-align: center;
    }
  }
}
</style>
