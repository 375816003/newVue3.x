<template>
  <div class="login-bg-div">
    <div class="login-bg" style="background:#5CE3A9;display:block;">
      <img src="@/assets/images/login/login-bg1.png">
      <div class="login-bg-conetnet">
        <div style="font-size:21px;top:172px;left:7px;">欢迎登录怡诺智能慢病管理系统</div>
        <div style="font-size:16px;top:322px;left:30px;">院内治疗</div>
        <div style="font-size:16px;top:358px;left:30px;">院外管理</div>
        <div style="font-size:16px;top:394px;left:30px;">智能云平台</div>
      </div>
    </div>
    <div class="login-bg" style="background:#EDF6FE;">
      <img src="@/assets/images/login/login-bg2.png">
      <!-- <div class="login-bg-conetnet">
        <div style="color:#58B530;font-size:14px;top:143px;left:32px;">更便捷的
          <br>信息录入</div>
        <div style="color:#FE7979;font-size:14px;top:201px;left:182px;">院内治疗
          <br>院外管理</div>
        <div style="color:#4BA7F5;font-size:14px;top:251px;left:38px;">更贴心的
          <br>患者服务</div>
        <div style="color:#FA9B00;font-size:14px;top:317px;left:166px;">更智能的
          <br>数据监控</div>
      </div> -->
    </div>
    <div class="login-bg" style="background:#FFE07C;">
      <img src="@/assets/images/login/login-bg3.png">
      <div class="login-bg-conetnet">
        <div style="color:#867644;font-size:14px;top:70px;left:123px;">多种终端操作，应用场景灵活，随时随地掌控患者动态</div>
      </div>
    </div>
    <div class="login-bg" style="background:#3EB6F2;">
      <img src="@/assets/images/login/login-bg4.png">
      <div class="login-bg-conetnet">
        <div style="font-size:16px;top:62px;left:126px;">大数据统计，多维度分析，全面提升慢病医疗管理水平</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    animateImg($leaveImg, $enterImg) {
      if ($leaveImg.is(":animated") || $enterImg.is(":animated")) {
        return new Promise((resolve, reject) => {
          resolve();
        });
      }
      let leavePromise = new Promise((resolve, reject) => {
        $leaveImg.finish();
        $leaveImg.fadeOut(1500, () => {
          resolve();
        });
      });

      let enterPromise = new Promise((resolve, reject) => {
        $enterImg.finish();
        $enterImg.fadeIn(1500, () => {
          resolve();
        });
      });

      return Promise.all([leavePromise, enterPromise]);
    },
    bgPlay() {
      let currentIndex = this.currentIndex;
      let $loginBg = $(".login-bg");
      let $leaveImg = $($loginBg[currentIndex]);
      currentIndex = (currentIndex + 1) % $loginBg.length;
      let $enterImg = $($loginBg[currentIndex]);
      this.currentIndex = currentIndex;
      this.animateImg($leaveImg, $enterImg).then(() => {
        setTimeout(() => {
          this.bgPlay();
        }, 3000);
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.bgPlay();
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.login-bg-div {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  min-width: 1000px;
  overflow: hidden;
  .login-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
    > img {
      @extend .vertical-center;
    }
    .login-bg-conetnet {
      @extend .vertical-center;
      width: 1000px;
      height: 459px;
      overflow: hidden;
      > div {
        position: absolute;
        color: #ffffff;
      }
    }
  }
}
</style>
