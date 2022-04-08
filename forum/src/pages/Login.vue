<template>
  <div>
    <form class="form">
      <h3 style="color: black">星神论坛用户登录</h3>
      <div>
        <input
          type="text"
          placeholder="邮箱/手机号/用户名"
          class="userAccountName"
          v-model="userId"
        />
        <br />
        <input
          type="password"
          placeholder="密码"
          class="userPassword"
          v-model="userPassword"
        />
        <br />
        <button class="btnLogin" @click.prevent="userLogin">登录</button>
        <br />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userId: "",
      userPassword: "",
    };
  },
  methods: {
    userLogin() {
      let data = new FormData()
      data.append('username',this.userId)
      data.append('password',this.userPassword)
      this.$store.dispatch("userLogin",data);
      this.$router.push('/message')
    },
  },
};
</script>

 <style scoped>
* {
  padding: 2px;
  margin: 4px;
}

a {
  text-decoration: none;
}

.form {
  width: 400px;
  height: 450px;
  margin: 0 auto;
  text-align: center;
}

.userAccountName {
  width: 300px;
  height: 50px;
  padding-left: 55px;
  /*设置内边距防止遮盖住图片*/
  background-image: url("../assets/imgs/userHead.png");
  /*设置图片的地址*/
  background-size: 50px 50px;
  /*这里是图片的大小*/
  background-repeat: no-repeat;
  /*让图片不重复*/
  background-position: 3px 3px;
}

.userPassword {
  width: 300px;
  height: 50px;
  padding-left: 55px;
  /*设置内边距防止遮盖住图片*/
  background-image: url("../assets/imgs/lock.png");
  /*设置图片的地址*/
  background-size: 50px 50px;
  /*这里是图片的大小*/
  background-repeat: no-repeat;
  /*让图片不重复*/
  background-position: 3px 3px;
}

.btnLogin {
  width: 360px;
  height: 60px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
}

.btnLogin:active {
  transform: translateY(4px);
}
</style>