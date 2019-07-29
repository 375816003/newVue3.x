<template>
  <div class="view_contain">
    <div class="second-nav clearfix">
      <div class="routeLink clearfix">
        <router-link class="secondLink" v-for="route in Routes" :key="route.id" :to="route.path" >{{route.name}}</router-link>
      </div>
    </div>
    <div class="second_router_view">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  
  data() {
    let Routes = this.$getRoute({id:'workBench',grade:'2'});
    return {
      Routes:Routes,
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>
