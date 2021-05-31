<template>
  <div class="chat-b">
    <p :class="[kind === 'pair' ? 'l-time' : 'r-time']">{{ postTime }}</p>
    <div class="chat-b__inner">
      <atom-msg-area ref="chat" :kind="kind"><slot /></atom-msg-area>
    </div>
  </div>
</template>

<script>
import atomMsgArea from "../../atoms/msg/atomMsgArea.vue";
export default {
  components: { atomMsgArea },
  props: {
    kind: {
      type: String,
      default: "pair",
    },
    postTime: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$maxWidth: 100%;

.l-time {
  margin-left: calc(100% - 50px);
  width: 10%;
}

.r-time {
  margin-left: 10px;
  width: 10%;
}

.chat-b {
  display: inline-block;
  padding-left: 10px;
  max-width: 100%;
  &__inner {
    padding: 10px;
    padding-left: 15px;
    padding-top: 2px;
  }
}
</style>