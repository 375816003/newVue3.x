<template>
<div class="view_contain">
  <div class="nav-first clearfix">
    <div class="orgRole left cur" @click="dialogVisible = true">时代怡诺 <i class="el-icon-arrow-down"></i></div>
    <div class="system left">
      <el-select v-model="firstRouteId" @change="changeSys">
        <el-option
          v-for="item in firstRoutes"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
    <div class="routeLink clearfix">
      <router-link class="firstLink" v-for="route in secondRoutes" :key="route.id" :to="route.path">{{route.name}}</router-link>
      <router-link class="firstLink" v-for="route in firstRoutesLast" :key="route.id" :to="route.path">{{route.name}}</router-link>
    </div>
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
  <div class="first_router_view">
    <router-view></router-view>
  </div>
  
</div>
  
</template>

<script>
import { mapGetters } from "vuex";
import store from 'store'
import session from 'storage'
export default {
  data() {
    return {
      selectRoute: {},
      firstRoutes:[],
      firstRoute:{},
      secondRoutes:[],
      firstRouteId:'',
      dialogVisible:false,
      firstRoutesLast:[
        { id: 'setting', path: '/setting', name: '系统管理', permiss: ''  },
        { id: 'transfer', path: '/transfer', name: '转诊管理', permiss: '' },
        { id: 'contacts', path: '/contacts', name: '联系人', permiss: '' }
      ]
    };
  },
  computed: {
    ...mapGetters(["routes"])
  },
  watch: {
    routes: function() {
      let routes = session.getSession('routes');
      let routesChange = session.getSession('routesChange')
      if(routesChange){
        let path = routes[0].path;
        this.$router.push(path);
      }
    }
  },
  mounted() {
    this.getFirRoute()
  },
  methods: {
    getFirRoute(){
      this.firstRoutes = this.$getRoute();
      let system = session.getSession('system')
      let firstRoute = this.getFirstRoute(system);
      this.firstRoute = firstRoute;
      this.firstRouteId = firstRoute.id;
      this.getSecRoute();
    },
    getFirstRoute(id){
      if(id){
        let first = _.filter(this.firstRoutes,function(ele){
          return ele.id == id;
        })[0];
        return first;
      }else{
        return this.firstRoutes[0];
      }
    },
    changeSys(id){
      this.firstRoute = this.getFirstRoute(id);
      store.commit('setSystem', this.firstRoute.id)
      session.setSession('system',this.firstRoute.id);
      this.getSecRoute();
    },
    getSecRoute(){
      this.secondRoutes = this.$getRoute(this.firstRoute);
      this.selectRoute = this.secondRoutes[0];
    },
    handleRoute(route){
      console.log(route);
    }
  }
};
</script>

<style lang="scss" scoped>
.first_router_view{
  height: calc(100% - 60px);
}
.nav-first {
  background-color: #1e89e0;
  padding-left: 20px;
  .orgRole, .system{
    height: 60px;
    line-height: 60px;
    color:#fff;
    font-size: 18px;
  }
  .routeLink{
    .firstLink{
      width: 80px;
      display: block;
      float: left;
      line-height: 60px;
      color: #fff;
      font-size: 16px;
      &:hover{
        background-color: #0081e3;
      }
      &.router-link-active{
        background-color: #0273c8;
      }
    }
  }
  
}

</style>
