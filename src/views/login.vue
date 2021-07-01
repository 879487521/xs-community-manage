<template>
	<div class="loginHome">
		<img class="login-img-bgc" src="../assets/images/login_bg.jpg" />
		<div class="login">
			<div class="centers">
				<div class="cont">
					<div class="titleImg">
					</div>
					<div class="title">
						<h1 style="font-weight: bold;font-size: 24px;margin-bottom: 15px;">萧山区村社组织运行智治云平台</h1>
					</div>
					<el-input class="user" v-model="loginForm.username" placeholder="请输入账号" auto-complete="off" style="padding: 10px 0;">
					</el-input>
					<el-input v-model="loginForm.password" placeholder="请输入密码" @keyup.enter.native="toLogin"
						type="password" auto-complete="off"  style="padding: 10px 0;"></el-input>
					<div class="check">
						<span class="leftcheck">
							<img @click="isshow = !isshow" :src="isshow == false ? nocheck : check" />
							记住用户名
						</span>
						<!-- <span class="rightcheck">忘记密码</span> -->
					</div>
					<div class="button" @click="toLogin">
						<span>立即登录</span>
						<img src="../assets/images/jt.png" />
					</div>
				</div>
			</div>
		</div>
		<!--  底部  -->
		<div class="footer">
			<span>©2010-2021 杭州萧山版权所有</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				loginForm: {
					username: "",
					password: "",
				},
				loginRules: {
					username: [{
						required: true,
						trigger: "blur",
						message: "请输入账号"
					}],
					password: [{
						required: true,
						trigger: "blur",
						message: "请输入密码"
					}],
				},
				isshow: false,
				nocheck: require("../assets/images/nocheck.png"),
				check: require("../assets/images/check.png"),
			};
		},
		methods: {
			toLogin() {
				if (this.loginForm.username == "") {
					this.$message({
						message: "用户账户不能为空",
						type: "warning",
					});
					return false;
				}
				if (this.loginForm.password == "") {
					this.$message({
						message: "用户密码不能为空",
						type: "warning",
					});
					return false;
				}
				this.$router.push({
					path: "/systemManage"
				});
        this.$message({
          type: 'success',
          message: '登录成功!'
        });

			},
		},
	};
</script>

<style scoped="scoped">
	.title {
		display: flex;
		margin-top: 10px;
	}

	h4 {
		font-size: 20px;
		font-weight: 500;
		color: #4064e1;
		margin-left: 10px;
	}

	.line {
		width: 4px;
		height: 20px;
		background-color: #4064e1;
	}

	.check {
		margin-top: 15px;
		font-size: 14px;
		width: 320px;
		display: flex;
		justify-content: space-between;
	}

	.leftcheck {
		font-weight: 500;
		display: flex;
		align-content: center;
	}

	img {
		margin-right: 6px;
	}

	.rightcheck {
		color: #4064e1;
	}

	.button {
		width: 300px;
		margin-top: 10px;
		height: 40px;
		background-color: #4064e1;
		border-radius: 5px;
		color: #ffffff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.button img {
		height: 14px;
	}

	p {
		margin-top: 10px;
		height: 30px;
		display: flex;
		align-items: center;
		color: #4d6ee2;
		font-size: 14px;
	}

	p img {
		margin-right: 6px;
	}

	.el-input__inner {
		margin-top: 10px;
		/* // background-color: #EFF0F4; */
		width: 300px;
		height: 40px;
		border: 1px solid #eff0f4;
	}

	.cont {}

	.loginHome {
		text-align: left;
		width: 100%;
		height: 100%;
	}

	.login-img-bgc {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.login {
		height: 100%;
		height: 69vh;
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10vh;
	}

	.login .el-form--label-top .el-form-item__label {
		padding: 0;
	}

	.centers {
		background-color: #fff;
		height: 450px;
		width: 500px;
		padding: 20px 55px;
		box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.38);
		border-radius: 5px;
		display: flex;
		justify-content: center;
    padding-top: 60px;
    box-sizing: border-box;
    margin-left: 40%;
	}

	.center .titleImg {
		width: 300px;
	}

	.titleImg img {
		width: 60%;
	}

	.left {
		display: flex;
		flex-direction: column;
	}

	.login-img-title {
		width: 225px;
		height: 42px;
		margin-bottom: 54px;
	}

	.login-img-ditu {
		width: 370px;
		height: 313px;
	}

	.footer {
		position: fixed;
		bottom: 10px;
		color: #303133;
		font-size: 14px;
		width: 100%;
	}

	.footer span {
		display: flex;
		justify-content: center;
	}

	.forget-password {
		display: flex;
		justify-content: space-between;
	}

	.forget-password .forget {
		font-size: 14px;
		color: #666;
	}

	@media screen and (min-width: 320px) and (max-width: 750px) {
		.loginHome .left {
			display: none;
		}

		.loginHome {
			display: flex;
		}

		.loginHome .center .cont .title {
			margin-top: 15px;
		}

		.loginHome .login-img-bgc {
			display: none;
		}

		.cont .button {
			width: 100%;
		}

		.cont .el-input__inner {
			width: 100%;
			height: 45px;
			margin-top: 15px;
		}

		.cont .button {
			margin-top: 15px;
			height: 45px;
		}

		.cont .ewmimg {
			width: 100%;
			text-align: center;
		}

		.loginHome .center {
			margin-top: -70px;
			width: 100%;
			padding: 20px;
			box-shadow: none;
			background: none;
			height: 100%;
			box-sizing: border-box;
		}
	}
</style>
