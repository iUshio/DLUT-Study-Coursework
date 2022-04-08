<template>
  <div>
    <div class="title">
      发送给：<input
        type="text"
        style="width: 100px; height: 13px"
        v-model="sendto"
      />
      标题：<input
        type="text"
        style="width: 100px; height: 13px"
        v-model="title"
      />
    </div>
    <hr align="center" width="100%" color="#987cb9" SIZE="1" />
    <textarea class="content" cols="30" rows="10" v-model="content"></textarea>
    <button @click="sendMsg">发送</button>
  </div>
</template>

<script>
import { getUserName } from "@/utils/localStorage";
export default {
  name: "SendMsg",
  data() {
    return {
      title: "",
      sendto: "",
      content: "",
    };
  },
  methods: {
    sendMsg() {
      let data = new FormData();
      data.append("username",getUserName('USERNAME'));
      data.append('title',this.title)
      data.append('msgcontent',this.content)
      data.append('sendto',this.sendto)
      data.append('state','0')
      this.$store.dispatch('userSendMsg',data)
    },
  },
};
</script>

 <style scoped>
div {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
.title {
  width: 600px;
  height: 25px;
  border: 1px solid;
}
.content {
  width: 600px;
  height: 300px;
  margin-left: 12%;
  border: 1px solid;
}
button {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}
</style>