<template>
  <a-row>
    <a-col>
      <h2 class="homeTitle center">
        四大利器，为您保驾护航
      </h2>
      <div class="InBox">
        <div class="inUl">
          <div class="card-item" v-for="item in introduceList" :key="item.id">
            <div class="imgWrpa">
              <img :src="item.srcUrl" alt="">
            </div>
            <h3 class="center">
              {{item.title}}
            </h3>
            <div class="msg center">
              {{item.msg}}
            </div>
          </div>
        </div>
      </div>
      <div>
        123
      </div>
    </a-col>
  </a-row>
</template>

<script>
  import imgHomeComgu from "@/assets/home/guide.png"
  import imgHomeComco from "@/assets/home/components.png"
  import imgHomeComjs from "@/assets/home/js.png"
  import imgHomeComla from "@/assets/home/layout.png"
  export default {
    //这是 home 页面的 ‘我们信息’ 的组件
    name: 'homeComIntroduce',
    data() {
      return {
        introduceList: [{
            id: 1,
            srcUrl: imgHomeComgu,
            title: '指南',
            msg: '涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川'
          },
          {
            id: 2,
            srcUrl: imgHomeComco,
            title: '组件',
            msg: '众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
          },
          {
            id: 3,
            srcUrl: imgHomeComjs,
            title: '工具库',
            msg: '众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨'
          },
          {
            id: 4,
            srcUrl: imgHomeComla,
            title: '布局',
            msg: '收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍'
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped="scoped">
  .homeTitle {
    color: #303133;
    font-size: 24px;
    padding: 24px 0 50px 0;
    margin: 0;
  }

  .center {
    text-align: center;
  }

  .InBox {
    display: flex;
    justify-content: center;
    .inUl {
      width: 1140px;
      display: flex;
      justify-content: center;
      align-items: center;
      .card-item{
        width: 252px;
        height: 371px;
        margin:20px ;
        border:1px solid #eaeefb;
        border-radius:5px;
        background-color: #F7F7F7;
        transition: background-color .3s;
      }
      .card-item:hover{
        background-color: #FFFFFF;
      }
    }
  }
  .imgWrpa{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    >img{
      width: 160px;
      height: 160px;
    }
  }
  h3{
    color: #606266;
    font-size: 18px;
  }
  .msg{
    margin: 14px 0 40px 0;
    padding: 0 25px;
    text-align: justify;
  }
</style>
