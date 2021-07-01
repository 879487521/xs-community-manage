<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
		  
      }
    },
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style-type: none;
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .header {
    width: 100%;
    height: 60px;
    background-color: #0489FF;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }

  .header img {
    margin: 0 10px 0 6px;
  }

  .header_title {
    font-size: 14px;
    color: #fff;
    margin-right: 30px;
  }

  .top_tab ul {
    display: flex;
    height: 100%;
  }

  .top_tab ul li {
    font-size: 16px;
    color: #fff;
    padding: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .top_tab {
    height: 100%;
  }

  .top_tab .active {
    background-color: #047EEA;
  }

  .top_right {
    height: 100%;
    position: absolute;
    right: 20px;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .top_right p {
    float: right;
    margin-left: 10px;
  }

  .top_right span {
    display: block;
    float: right;
  }

  .main {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .left_tab {
    width: 14.7%;
    height: 100%;
    border: 2px solid #F7F7F7;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #F7F7F7;
    position: fixed;
    left: 0;
    top: 72px;
  }

  .main_box {
    width: 98%;
    height: 98%;
    border: 2px solid #F7F7F7;
  }

  .left_tab ul {
    width: 100%;
  }

  .left_tab li {
    width: 100%;
    height: 48px;
    font-size: 13px;
    color: #666;
    display: flex;
    align-items: center;
    padding-left: 28px;
    cursor: pointer;
  }

  .left_tab li img {
    margin-right: 10px;
  }

  .left_tab .active {
    color: #367FF7;
    border-left: 4px solid #367FF7;
    padding-left: 24px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: calc(100% - 76px);
    padding-top: 72px;
  }
</style>
