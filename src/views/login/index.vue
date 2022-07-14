<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 表单 -->
    <van-form @submit="onSubmit" ref="loginForm">
      <van-field
        name="uname"
        :rules="userFormRules.uanme"
        placeholder="请输入账号"
        v-model="user.uname"
      />
      <van-field
        type="text"
        :rules="userFormRules.psw"
        name="psw"
        placeholder="请输入密码"
        v-model="user.psw"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <!-- 去注册 -->
    <div class="reg">
      <a href="#">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user"
export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        // username: "hzhmqd",
        // password: "123456",
      },
      userFormRules: {
        uanme: [
          {
            required: true,
            message: "账号不能为空",
          },
          {
            pattern: /^\w+$/,
            message: "账号格式错误",
          },
        ],
        psw: [
          {
            required: true,
            message: "密码不能为空",
          },
          { pattern: /^\d{6}$/, message: "密码格式错误" },
        ],
      },
    }
  },
  methods: {
    async onSubmit() {
      const user = this.user
      this.$toast.loading({
        message: "登录成功",
        forbidClick: true,
        duration: 0,
      })
      try {
        const { data } = await login(this.user)
        this.$store.commit("setUser", data.data)
        this.$toast.success("登录成功")
        this.$router.back()
      } catch (err) {
        this.$toast.fail("登录失败，请稍后重试")
      }
      this.$router.push("/my")
    },
  },
}
</script>

<style scoped lang="less">
.login-container {
  .navbar {
    background-color: #21b97a;
    :deep(.van-nav-bar__title) {
      color: #fff;
    }
    :deep(.van-icon) {
      color: #fff;
    }
  }
  .van-button {
    background-color: #1cb676;
    border: none;
  }
  .reg {
    text-align: center;
    margin-top: 30px;
    a {
      font-size: 14px;
      color: #666;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
