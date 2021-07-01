<template>
  <div class="left_tab">
    <ul>
      <li :class="{active:leftTab===0}" @click="leftTab=0"><img src="@/assets/logo.jpg" alt="">创新管理制度</li>
      <li :class="{active:leftTab===1}" @click="leftTab=1"><img src="@/assets/logo.jpg" alt="">互学互比制度</li>
      <li :class="{active:leftTab===2}" @click="leftTab=2"><img src="@/assets/logo.jpg" alt="">周二例会制度</li>
      <li :class="{active:leftTab===3}" @click="leftTab=3"><img src="@/assets/logo.jpg" alt="">“两单制”管理制度</li>
      <li :class="{active:leftTab===4}" @click="leftTab=4"><img src="@/assets/logo.jpg" alt="">分析研判制度</li>
      <li :class="{active:leftTab===5}" @click="leftTab=5"><img src="@/assets/logo.jpg" alt="">述职评议制度</li>
      <li :class="{active:leftTab===6}" @click="leftTab=6"><img src="@/assets/logo.jpg" alt="">后备力量培养制度</li>
      <li :class="{active:leftTab===7}" @click="leftTab=7"><img src="@/assets/logo.jpg" alt="">内控监督制度</li>
      <li :class="{active:leftTab===8}" @click="leftTab=8"><img src="@/assets/logo.jpg" alt="">请销假制度</li>
      <li :class="{active:leftTab===9}" @click="leftTab=9"><img src="@/assets/logo.jpg" alt="">一肩挑人员管理制度</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        leftTab: 0,
		// 制度
		systemTabList:[{
			
		}],
		systemTabList:[{}],
		systemTabList:[{}],
		systemTabList:[{}],
		systemTabList:[{}],
		systemTabList:[{}],

      }
    }
  }
</script>

<style scoped>

</style>
