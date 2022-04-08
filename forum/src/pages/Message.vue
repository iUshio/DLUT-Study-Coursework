<template>
  <div class="mainDiv">
    <ul>
      <template v-for="message in msg">
        <div :key="message.msgid">
          <li class="msg">
            <div class="content">
              <!-- 邮件图片 -->
              <img
                src="../assets/imgs/newMsg.png"
                alt=""
                @click="readMsg(message)"
                v-if="message.state == 0"
              />
              <img
                src="../assets/imgs/noNewMsg.png"
                alt=""
                @click="readMsg(message)"
                v-if="message.state == 1"
              />
              
              <span class="title">{{ message.title }}</span>
              <span class="contents">{{ message.msgcontent }}</span>
              <div class="rightB">
                <a href="#" class="deleteB" @click="deleteMsg(message.msgid)"
                  >删除</a
                >
                &nbsp;
                <a href="#" class="backmsg">回信</a>
                &nbsp;
                <span class="time">{{ message.msg_create_date }}</span>
              </div>
            </div>
          </li>
          <hr align="center" width="100%" color="#987cb9" SIZE="1" />
        </div>
      </template>
    </ul>
  </div>
</template>

<script>
import { getUserName } from "@/utils/localStorage";
import { mapState } from "vuex";
export default {
  name: "Message",

  mounted() {
    this.getData();
  },
  computed: {
    ...mapState({
      msg: (state) => state.Message.msg,
    }),
  },
  methods: {
    //   获取数据
    getData() {
      let data = new FormData();
      let localUserName = data.append("username", getUserName("USERNAME"));
      this.$store.dispatch("getUserMsg", data);
    },
    // 删除数据
    deleteMsg(msgid) {
      let data = new FormData();
      data.append("msgid", msgid);
      this.$store.dispatch("deleteMsg", data);
      this.getData();
    },
    // 读取信息
    readMsg(message) {
      let data = new FormData()
      data.append('msgid',message.msgid)
      this.$store.dispatch('readMsg',data)
      this.$store.dispatch('nowReading',message)
      this.$router.push("/reading");
    },
  },
};
</script>

<style scoped>
.mainDiv {
  margin: 0 auto;
  width: 750px;
  height: 500px;
}

.msg {
  width: 700px;
  height: 30px;
  margin-top: 5px;
}

.title {
  width: 70px;
  height: 20px;
  margin-left: 2%;
  margin-top: 0.5%;
}
.contents {
  width: 70px;
  height: 20px;
  margin-left: 1%;
  margin-top: 0.5%;
}

.content {
  display: flex;
  text-align: center;
}
.backmsg {
  margin-top: 0.5%;
}
.rightB {
  margin-left: 42%;
  margin-top: 0.5%;
}
ul {
  list-style: none;
}

div ul li img {
  width: 30px;
  height: 30px;
  float: left;
}
</style>