<template>
  <div class="form">
    <form>
      <h2 align="center">星神论坛注册</h2>

      <div class="formText">
        <input
          type="text"
          placeholder="用户名"
          class="formTextMarkA"
          v-model="username"
        />
        <br />

        <input
          type="password"
          placeholder="设置密码"
          class="formTextMarkA"
          v-model="password"
        />
        <br />

        <input
          type="text"
          placeholder="邮箱地址"
          class="formTextMarkA"
          v-model="email"
        />
      </div>

      <div align="center">
        <h5>
          点击注册表示您同意服务协议<a href="javascript:;">《服务协议》</a>
        </h5>
        <button class="registerButton" @click.prevent="userRegister">
          同意协议并注册
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    userRegister() {
      let data = new FormData()
      data.append('username',this.username)
      data.append('password',this.password)
      data.append('email',this.email)
      this.$store.dispatch("userRegister", data);
    },
  },
};
</script>

 <style scoped>
* {
  padding: 2px;
  margin: 4px;
}

body {
  background-color: whitesmoke;
}

.form {
  margin: auto;
  width: 600px;
  height: 400px;
}

.formText {
  margin: auto;
  width: 320px;
  height: 160px;
}

.formTextMarkA {
  width: 300px;
  height: 40px;
}

.registerButton {
  width: 320px;
  height: 50px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
}

.registerButton:active {
  transform: translateY(4px);
}
</style>