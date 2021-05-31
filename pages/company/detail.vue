<template>
  <detail class="company-detail" />
</template>

<script>
import Detail from "@/components/organism/company/detail.vue";

export default {
  components: { Detail },
  layout: "NoCircleNoFooterLayout",
};
</script>

<style lang="scss" scoped>
.company-detail {
  margin-top: 40px;
}
</style>

