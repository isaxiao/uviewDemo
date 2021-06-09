<template>
  <div id="app">
    <a-layout>
      <!-- 头部信息 -->
      <a-layout-header>
        <Header></Header>
      </a-layout-header>
      <!-- 主要内容展示区 -->
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <!-- 底部信息区域 -->
      <a-layout-footer>
        <Footer></Footer>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
export default {
  name:'App',
  components:{
    Header,
    Footer
  },
  data(){
    return {
      routeKsy:''
    }
  },
  watch:{
    '$route':function(to){
      console.log(to)
      if(to){
        this.routeKsy = to.name
        sessionStorage.setItem('routeKsy',to.name)
      }
    }
  }
} 
</script>

<style lang="scss">
.ant-layout-header,.ant-layout-content,.ant-layout-footer{
  margin: 0;padding: 0;
  background: #FFF;
}
.ant-layout-header {
  height: 64px;
  border-bottom:1px solid rgba(61,61,61,.15);
  box-sizing: border-box;
}
.ant-layout-content{
  min-height: calc(100vh - 360px - 64px);
}
.ant-layout-footer{
  height: 360px;
  background: #FFFFFF !important;
}
//规定到屏幕最小宽度为 960px
// 小于960 会出现滚动条
#app{
  min-width:960px;
  background: #FFFFFF;
}
*{
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
}
</style>
