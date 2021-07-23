<template>
  <div>
    <organism-chat :message="message" :company="company" :user="user" />
  </div>
</template>

<script>
import OrganismChat from "@/components/organism/OrganismChat.vue";

export default {
  components: { OrganismChat },
  layout: "NoCircleNoFooterLayout",
  async asyncData({ $axios, params }) {
    const chat = await $axios.get(`/v1/chats/${params.id}`);
    const data = chat?.data;
    console.log(data);

    return {
      message: data?.messages,
      company: data?.company,
      user: data?.user,
    };
  },
};
</script>

<style></style>
