<template>
  <div>
    <div class="title">
      题目：{{ message.title }} &nbsp;来自{{ message.username }} &nbsp; 时间：{{
        message.msg_create_date
      }}
    </div>
    <hr align="center" width="100%" color="#987cb9" SIZE="1" />
    <div class="content">{{ message.msgcontent }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Reading",
  data() {
    return {
      message:''
    }
  },
  computed: {
    ...mapState({
      message: (state) => state.Message.nowContent,
    }),
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
  width: 800px;
  height: 25px;
  border: 1px solid;
}
.content {
  width: 800px;
  height: 500px;
  border: 1px solid;
}
</style>