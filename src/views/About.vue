<template>
  <div class="about">
    <img src="/static/logo.png" alt="" srcset="">
    <h1>This is an about page222</h1>
    <div id="test"> test</div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from 'components/HelloWorld'
export default {
  data () {
    return {
      msg:'ss',
      input:''
    }
  },
  mounted(){
    
  },
  components:{
    HelloWorld
  }
}
</script>

