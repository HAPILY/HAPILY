<template>
  <div>
    <organism-chat
      :group-id="groupId"
      :chat-data="chatData"
      :type="type"
      @sendChat="sendChat"
    />
  </div>
</template>

<script>
import OrganismChat from "@/components/organism/OrganismChat.vue";

export default {
  middleware: ["checkAuth"],
  components: {
    OrganismChat,
  },
  layout: "NoCircleNoFooterLayout",
  async asyncData({ $axios, params }) {
    let chat;
    let groupId;
    // 自分がuser or companyどちらか確認
    const userType = window.localStorage.getItem("type");
    const myId = window.localStorage.getItem("id");
    const userId = params.uid;
    const companyId = params.cid;

    /**
     * 自分のtypeとidが一致してない場合はTopへ戻る
     * userTypeがuserの場合は、uidは必ず自分のIDになる
     * userTypeがcompanyの場合は、cidは必ず自社のIDになる
     */
    if (userType === "user" && myId !== userId) {
      window.location.href = "/";
      return;
    }
    if (userType === "company" && myId !== companyId) {
      window.location.href = "/";
      return;
    }

    // group id取得
    groupId = await $axios.get(
      `/v1/chats/group_data?user_id=${userId}&company_id=${companyId}`
    );

    if (!groupId.data) {
      // 初回なのでgroupを作る
      const param = {
        send_user_type: userType,
        user_id: userId,
        company_id: companyId,
      };
      chat = await $axios.post(`/v1/chats`, param);
      groupId = await $axios.get(
        `/v1/chats/group_data?user_id=${userId}&company_id=${companyId}`
      );
    } else {
      // 相手とのchatデータ取得
      chat = await $axios.get(`/v1/chats/${groupId.data?.id}`);
    }

    return {
      chatData: chat.data,
      type: userType,
      groupId: groupId.data?.id,
    };
  },
  data() {
    return {
      chatData: undefined,
    };
  },
  methods: {
    async sendChat(groupId, params) {
      const res = await this.$axios.patch(`/v1/chats/${groupId}`, {
        ...params,
      });
      if (res?.data) {
        this.chatData = { ...res.data };
      }
    },
  },
};
</script>
