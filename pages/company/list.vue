<template>
  <div class="company-list">
    <div class="company-list__inner">
      <template>
        <p class="title-border">会社一覧</p>
      </template>
      <div v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
        <organism-campany-list-item />
        <p class="company-border"></p>
      </div>
    </div>
  </div>
</template>

<script>
import OrganismCampanyListItem from "@/components/organism/OrganismCampanyListItem.vue";
export default {
  components: { OrganismCampanyListItem },
  layout: "NoCircleNoFooterLayout",
};
</script>

<style lang="scss" scope>
.company-border,
.title-border {
  width: 80%;
  margin: 30px auto;
}
.company-border {
  border: 1px solid rgb(168, 166, 166);
}

.title-border {
  border-bottom: 1px solid rgb(168, 166, 166);
  font-size: 20px;
  font-weight: 300;
}
</style>