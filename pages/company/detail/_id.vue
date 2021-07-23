<template>
  <detail
    class="company-detail"
    :name="company.name"
    :vision="company.vision"
    :company-url="company.company_url"
    :icon-url="company.icon_url"
    :address="company.address"
    :title="company.title"
    :detail="company.detail"
    :tags="company.tags"
  />
</template>

<script>
import Detail from "@/components/organism/company/detail.vue";

export default {
  components: { Detail },
  layout: "NoCircleNoFooterLayout",
  async asyncData({ $axios, params }) {
    const company = await $axios.get(`/v1/companies/${params.id}`);
    return {
      company: company.data,
    };
  },
};
</script>

<style lang="scss" scoped>
.company-detail {
  padding-top: 40px;
}
</style>
