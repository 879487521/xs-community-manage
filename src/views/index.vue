<template>
	<div class="home">
		<div class="header">
			<img src="@/assets/logo.jpg" alt="">
			<p class="header_title">萧山区村社组织运行智治云平台</p>
			<div class="top_tab">
				<ul>
					<li :class="{active:topTab===0}" @click="topTab=0">制度管理系统</li>
					<li :class="{active:topTab===1}" @click="topTab=1">档案管理系统</li>
					<li :class="{active:topTab===2}" @click="topTab=2">日常考评系统</li>
					<li @click="pickInfo">年度考核系统</li>
					<li @click="pickInfo">画像管理系统</li>
					<li @click="pickInfo">系统设置</li>
				</ul>
			</div>
			<div class="top_right">
				<span>用户名</span>
				<p @click="toLogin()">退出</p>
			</div>
		</div>
		<el-container>
			<el-aside class="aside-box">
				<el-menu v-if="topTab==0" router :default-active="onRoutes" :collapse="isCollapse"
					class="el-menu-vertical" @open="handleOpen" @close="handleClose" @select="selectAction"
					active-text-color="#409EFF" style="width: 100%;">
					<el-menu-item v-for="(item,index) in tabList" :key="index" :index="item.path" router
						@click="onclick(item.path, item.name)">
						<i :class="item.icon"></i>
						<span slot="title">{{item.name}}</span>
					</el-menu-item>
				</el-menu>
				<el-menu v-if="topTab==1" router :default-active="onRoutes" :collapse="isCollapse"
					class="el-menu-vertical" @open="handleOpen" @close="handleClose" @select="selectAction"
					active-text-color="#409EFF" style="width: 100%;">
					<el-menu-item v-for="(item,index) in tabList2" :key="index" :index="item.name" router
						v-if="!item.children" @click="onclick(item.path, item.name)">
						<i :class="item.icon"></i>
						<span slot="title">{{item.name}}</span>
					</el-menu-item>
					<el-submenu :key="index" :index="item.name" v-else>
						<template #title>
							<i :class="item.icon"></i>
							<span>{{item.name}}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item v-for="(v,i) in item.children" :key="i" :index="v.path" router
								@click="onclick(v.path, v.name)">
								<i :class="v.icon"></i>
								<span slot="title">{{v.name}}</span>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
				<el-menu v-if="topTab==2" router :default-active="onRoutes" :collapse="isCollapse"
					class="el-menu-vertical" @open="handleOpen" @close="handleClose" @select="selectAction"
					active-text-color="#409EFF" style="width: 100%;">
					<el-menu-item v-for="(item,index) in tabList2" :key="index" :index="item.path" router
						@click="onclick(item.path, item.name)">
						<i :class="item.icon"></i>
						<span slot="title">{{item.name}}</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<el-main style="padding: 0px;">
					<transition name="fade-transform" mode="out-in">
						<router-view></router-view>
					</transition>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import pageHeader from "../components/headerNavbar.vue";
	export default {
		components: {
			pageHeader,
		},
		data() {
			return {
				topTab: 0,
				show: false,
				isCollapse: false,
				isTitle: '',
				tabList: [{
						name: "创新管理制度",
						path: "/systemManage",
						icon: 'el-icon-s-home',
					},
					{
						name: "互学互比制度",
						path: '/hologra',
						icon: 'el-icon-document',
					},
					{
						name: "周二例会制度",
						path: '/evaluate',
						icon: 'el-icon-user-solid',
					},
					{
						name: "“两单制”管理制度",
						path: '/talent',
						icon: 'el-icon-star-on',
					},
					{
						name: "分析研判制度",
						path: '/welfare',
						icon: 'el-icon-warning',
					},
					{
						name: "述职评议制度",
						path: '/survey',
						icon: 'el-icon-s-tools',
					},
					{
						name: "内控监督制度",
						path: '/publicity',
						icon: 'el-icon-s-goods',
					},
				],
				tabList2: [{
						name: "组织概况",
						path: "/systemManage",
						icon: 'el-icon-s-platform',
					},
					{
						name: "村社数据",
						icon: 'el-icon-s-marketing',
						children: [{
							name: "内控监督制度",
							path: '/publicity',
							icon: 'el-icon-s-goods',
						}, {
							name: "内控监督制度",
							path: '/publicity',
							icon: 'el-icon-s-goods',
						}, ]
					},
					{
						name: "人员数据",
						icon: 'el-icon-s-opportunity',
						children: [{
							name: "11",
							path: '/publicit',
							icon: 'el-icon-s-goods',
						}, {
							name: "22",
							path: '/publicity',
							icon: 'el-icon-s-goods',
						}, ]
					},
					{
						name: "档案变更审核",
						path: '/evaluate',
						icon: 'el-icon-s-shop',
					},
				],


			};
		},
		components: {
			pageHeader,
		},
		methods: {
			onclick(path, name) {
				this.isTitle = name;
				console.log(this.isTitle)
			},
			onshow() {
				this.isCollapse = !this.isCollapse;
			},
			toLogin() {
				this.$confirm('是否退出登录?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '退出成功!'
					});
					this.$router.push('/Login')
				}).catch(() => {

				});

			},
			handleOpen(key, keyPath) {},
			handleClose(key, keyPath) {},
			selectAction(key, keyPath) {
				this.activePath = key;
			},
			pickInfo() {
				this.$message({
					type: 'info',
					message: '建设中...'
				});
			}
		},
		computed: {
			onRoutes() {
				const route = this.$route
				const {
					meta,
					path
				} = route
				// 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
				// meta中 有activeMenu 字段的子页面，都会显示高亮
				if (meta.activeMenu) {
					return meta.activeMenu
				}
				return path
			}
		},
		created() {
			this.isTitle = this.$route.name;
		},
		updated() {
			this.isTitle = this.$route.name;
		}
	};
</script>
<style type="text/css">
	.el-menu-vertical {
		height: 100%;
		margin-right: 10px;
	}

	.aside-box {
		overflow: hidden;

	}

	.el-menu-vertical .el-menu-item {
		border-left: 5px solid transparent;
		box-sizing: border-box;
	}

	.el-menu-vertical .el-submenu {
		border-left: 5px solid transparent;
		box-sizing: border-box;
	}

	.el-menu-vertical .el-menu-item.is-active {
		border-color: #409EFF;
	}

	.home {
		overflow: hidden;
	}
</style>
