<template>
  <div class="about">
    <img src="/static/logo.png" alt="" srcset="">
    <h1>This is an about page222</h1>
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from 'components/HelloWorld'
export default {
  data () {
    return {
      msg:'ss'
    }
  },
  components:{
    HelloWorld
  }
}
</script>

