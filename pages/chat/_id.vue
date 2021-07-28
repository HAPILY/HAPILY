<template>
  <div>
    <organism-chat :chat-data="chatData" :type="type" />
  </div>
</template>

<script>
import OrganismChat from "@/components/organism/OrganismChat.vue";

export default {
  components: {
    OrganismChat,
  },
  layout: "NoCircleNoFooterLayout",
  async asyncData({ $axios, params }) {
    // 自分がuser or companyどちらか確認
    const userType = window.localStorage.getItem("type");
    // 相手とのchatデータ取得
    const chat = await $axios.get(`/v1/chats/${params.id}`);

    return {
      chatData: chat.data,
      type: userType,
    };
  },
};
</script>
