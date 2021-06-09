<template>
  <div>
    <a-row>
      <a-col :span="4" class="content-center center" @click="changeTitle({key:'homePage'})">
        <img src="@/assets/logo.png" class="img-Logo"/>
        <div>
          uView
        </div>
      </a-col>
      <a-col :span="12" :offset="1" class="content-left">
       <a-menu v-model="current" mode="horizontal" @select="changeTitle">
        <a-menu-item key="homePage">
           <a-icon type="home" />首页
        </a-menu-item>
        <a-menu-item key="newsList">
          <a-icon type="eye" />资讯中心
        </a-menu-item>
        
       <a-sub-menu>
         <span slot="title" class="submenu-title-wrapper">
           <a-icon type="setting" />合作案例
         </span>
         <a-menu-item-group title="Item 1">
           <a-menu-item key="1">
             cooperationCases1
           </a-menu-item>
           <a-menu-item key="2">
             cooperationCases2
           </a-menu-item>
         </a-menu-item-group>
         <a-menu-item-group title="Item 2">
           <a-menu-item key="3">
             cooperationCases3
           </a-menu-item>
           <a-menu-item key="4">
             cooperationCases4
           </a-menu-item>
         </a-menu-item-group>
       </a-sub-menu>
       
       <a-menu-item key="aboutUs">
        <a-icon type="solution" />关于我们
       </a-menu-item>
       <a-menu-item key="donateToUs">
        <a-icon type="transaction" />捐赠我们
       </a-menu-item>
      
       
      </a-menu>
      </a-col>
      <a-col :span="4" :offset="1" class="center">
        <a-menu v-model="current" mode="horizontal" @select="changeTitle">
        <a-menu-item key="loginOregs">
         <a-icon type="login" />登陆/注册
        </a-menu-item>
       </a-menu>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  export default {
    name:'Header',
    data(){
      return{
        searchValue:'',//搜索内容
        current: ['homePage'],// homePage首页  newsList 资讯新闻列表
      }
    },
    methods:{
      onSearch(){
        this.$message.success('触发搜索，搜索内容为：'+ this.searchValue);
      },
      changeTitle(item){
        if(item.key != this.$route.name){
          this.$router.push(item.key)
        }
      }
    },
    created(){
      let routeKsy = sessionStorage.getItem('routeKsy')
      if(routeKsy){
        this.current = [routeKsy]
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .content-center{
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    >div{
      font-size: 22px;
      color: #2c3e50;
    }
    .img-Logo{
      width: 35px;
      height: 35px;
      vertical-align:center;
    }
  }
  //我们隐藏了 antdvue 导航条的底部线条 并且给了新的高度
  .ant-menu-horizontal{
    border: none;
    line-height: 61px;
  }
  .center{
    text-align: center;
  }
</style>
