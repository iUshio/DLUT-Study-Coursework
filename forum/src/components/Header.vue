<template>
  <!-- 头部界面 -->
  <div>
    <span>请：</span>
    <router-link to="/login" v-show="!isLogin">登录</router-link>
    <router-link to="/register" v-show="!isLogin">注册</router-link>
    <router-link to="/sendMsg" v-show="isLogin">发送信息</router-link>

    <a @click="logout" v-show="isLogin">退出</a>
    <span v-show="isLogin">当前用户：{{ isLogin }}</span>
    <hr align="center" width="100%" color="#987cb9" SIZE="1" />
  </div>
</template>

<script>
import { removeUserName, getUserName } from "@/utils/localStorage";
export default {
  name: "Header",
  methods: {
    logout() {
      removeUserName("USERNAME");
      this.$router.push("/login");
    },
  },
  computed: {
    isLogin() {
      return getUserName("USERNAME");
    },
  },
};
</script>

<style scoped>
* {
  margin-left: 5px;
}
</style>