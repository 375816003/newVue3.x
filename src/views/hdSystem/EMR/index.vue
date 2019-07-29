<template>
  <div class="view_contain clearfix">
    <div class="emr_aside left">
      <component :is="system"></component>
    </div>
    <div class="emr_mian right">
      <div class="second-nav clearfix">
        <div class="routeLink clearfix">
          <router-link class="secondLink" v-for="route in Routes" :key="route.id" :to="route.path" >{{route.name}}</router-link>
        </div>
      </div>
      <div class="second_router_view">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import hdSystem from 'components/hdSystem'
import hmSystem from 'components/hmSystem'
import { mapGetters } from "vuex";
export default {
  
  data() {
    let Routes = this.$getRoute({id:'EMR',grade:'2'});
    return {
      Routes:Routes,
    };
  },
  computed: {
    ...mapGetters(["system"])
  },
  mounted() {},
  methods: {},
  components:{
    hdSystem,
    hmSystem
  }
};
</script>

<style lang="scss" scoped>
.emr_mian{
  width: calc(100% - 250px);
}
.emr_aside{
  width: 250px;
}
</style>
