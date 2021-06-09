<template>
  <div class="home">
    <homeComAbout></homeComAbout>
    <homeComIntroduce></homeComIntroduce>
  </div>
</template>

<script>
// @ is an alias to /src
import homeComAbout from "./homeComAbout.vue"
import homeComIntroduce from "./homeComIntroduce.vue"
export default {
  name: 'homePage',
  components: {
    homeComAbout,
    homeComIntroduce
  }
}
</script>

<style>
  .home{
    background:#fff;
  }
</style>
