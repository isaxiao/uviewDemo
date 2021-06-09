<template>
  <a-row>
    <a-col :span="24">
      <div class="homeComAbout">
        <h1 class="homeTitle center">
          多平台快速开发的UI框架
        </h1>
        <h2 class="titleIntroduce center">
					uView UI，是uni-app生态最优秀的UI框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水
        </h2>
        <div class="banner-img center">
          <img :src="imgHomeComAbout" alt="">
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script>
  import imgHomeComAbout from "@/assets/home/homeComAbout.png"
  export default {
    //这是 home 页面的 ‘我们信息’ 的组件
    name:'homeComAbout',
    data(){
      return{
        imgHomeComAbout,
      }
    },
  }
</script>

<style lang="scss" scoped="scoped">
  .homeComAbout{
    padding-top:50px;
    .homeTitle{
      font-weight: 700;
      color: #303133;
      font-size: 2rem;
    }
    .titleIntroduce{
     color: #606266;
     font-size:1.1rem ;
     padding-bottom:14px;
    }
    .center{
      text-align: center;
    }
    .banner-img{
      width: 100%;
      height: 640px;
      >img{
        width: 1140px;
        height: 100%;
      }
    }
  }
</style>
