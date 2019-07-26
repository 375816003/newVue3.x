<template>
  <div class="nav-first clearfix">
    <div class="orgRole left cur" @click="dialogVisible = true">时代怡诺 <i class="el-icon-arrow-down"></i></div>
    <div class="system left">
      <el-select v-model="firstRouteId" @change="getSecRoute">
        <el-option
          v-for="item in firstRoutes"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
    <el-menu
      :default-active="selectRoute.id"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#1e89e0"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item v-for="route in secondRoutes" :key="route.id" :index="route.id" @click="handleRoute(route)">{{route.name}}</el-menu-item>
    </el-menu>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectRoute: {},
      firstRoutes:[],
      firstRouteId:'hd',
      secondRoutes:[],
      dialogVisible:false
    };
  },

  mounted() {
    this.getFirRoute()
  },
  methods: {
    getFirRoute(){
      this.firstRoutes = this.$getRoute();
      this.firstRouteId = this.firstRoutes[0].id;
      this.getSecRoute();
    },
    getSecRoute(){
      this.secondRoutes = this.$getRoute(this.firstRouteId);
      this.selectRoute = this.secondRoutes[0];
    },
    handleRoute(route){
      console.log(route);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-first {
  background-color: #1e89e0;
  padding-left: 20px;
  .orgRole, .system{
    height: 60px;
    line-height: 60px;
    color:#fff;
    font-size: 18px;
  }
  .el-menu-demo{
    width: calc(100% - 250px);
    border-style: none;
    float: right;
  }
  .el-menu-item{
    font-size: 18px;
    padding: 0 10px;
    &.is-active{
      background-color: #0273c8!important;
      border-bottom-style: none;
    }
  }
  
}

</style>
