<template>
 <div class="footerBox">
   <a-row class="firstWrap">
     <a-col :span="6" class="firstFooter">
       <a href="https://uviewui.com/" target="_blank">
        <img :src="logoImg" alt="图标加载失败">
        <div>
          UVIEW UI
        </div>
       </a>
     </a-col>
     <a-col :span="6" class="footerContent">
       <div><h2><a href="https://uviewui.com/">uView</a></h2></div>
       <div><a href="https://github.com/YanxinNet/uView">GitHub</a></div> 
       <div><a href="https://gitee.com/xuqu/uView">uView Gitee</a></div> 
       <div><a href="https://ext.dcloud.net.cn/publisher?id=54602">uView DCloud</a></div>
     </a-col>
     <a-col :span="6" class="footerContent">
       <div><h2 class="cor">友情链接</h2></div>
       <div><a href="https://cdn.uviewui.com/uview/friends-link/K3CYA7RO43UUAS8TZVUJY.jpg">fastAdmin</a></div> 
       <div><a href="http://chu1204505056.gitee.io/admin-pro/?hmsr=uview&hmpl=&hmcu=&hmkw=&hmci=">Vue-Admin-Beautiful</a></div> 
       <div><a href="https://github.com/livelyPeng/pl-table">pl-table</a></div>
       <div><a href="https:https://www.quanzhan.co/luch-request/">luch-request</a></div>
       <div><a href="https://www.apipost.cn/">Apipost</a></div>
       <div><a href="https://www.yisu.com/cdn/huodong.html?f=uview&ystimes=cdn1210">亿速云CDN</a></div>
     </a-col>
     <a-col :span="6" class="footerContent">
       <div><h2 class="cor">更多</h2></div>
       <div><a href="https://uviewui.com/components/resource.html">资源</a></div> 
       <div><a href="https://uviewui.com/layout/intro.html">模板</a></div> 
       <div><a href="https://blog.csdn.net/weixin_47821281/article/details/115672118?spm=1001.2014.3001.5501">前端面试题</a></div>
     </a-col>
   </a-row>
   <a-row class="lastFooter">
     <a-col :span="24">
      Copyright {{new Date().getFullYear()}} uView UI | 粤ICP备19025822号
     </a-col>
   </a-row>
 </div>
 
</template>

<script>
  import logoImg from "@/assets/logo.png"
  export default {
    name:'Footer',
    data(){
      return {
        logoImg,
        
      }
    }
  }
</script>

<style lang="scss" scoped>
 .footerBox{
   height: 360px;
   background: #000;
   .firstWrap{
     height: 299px;
     border:1px solid hsla(0,0%,100%,.25);
     >div{
       height: 100%;
     }
     .firstFooter{
       display: flex;
       justify-content: center;
       align-items: center;
     }
     .footerContent{ //中间内容区域
       color:#fff;
       padding-top: 20px;
       >a{
         font-size: 20px;
         font-weight: 600;
       }
       >div{
        margin: 12px;
       }
     }
     .focusUs{ //关注我们
       color:#fff;
     }
   }
   .lastFooter{
     color: #fff;
     height: 60px;
     line-height: 60px;
     text-align: center;
   }
 }
 a{
   text-decoration: none;
   color: #FFFFFF;
   text-align: center;
 }
 .cor{
   color: white;
   cursor: pointer;
 }
</style>
