<template>
  <div class="header">
    <img src="@/assets/logo.jpg" alt="">
    <p class="header_title">萧山区村社组织运行智治云平台</p>
    <div class="top_tab">
      <ul>
        <li :class="{active:topTab===0}" @click="topTab=0">制度管理系统</li>
        <li :class="{active:topTab===1}" @click="topTab=1">档案管理系统</li>
        <li :class="{active:topTab===2}" @click="topTab=2">日常考评系统</li>
        <li :class="{active:topTab===3}" @click="topTab=3">年度考核系统</li>
        <li :class="{active:topTab===4}" @click="topTab=4">画像管理系统</li>
        <li :class="{active:topTab===5}" @click="topTab=5">系统设置</li>
      </ul>
    </div>
    <div class="top_right">
      <span>用户名</span>
      <p>退出</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        topTab: 0,

      }
    }
  }
</script>

<style scoped>

</style>
