<template>
  <div class="company-list">
    <div class="company-list__inner">
      <template>
        <p class="title-border">会社一覧</p>
      </template>
      <div class="company-list__container">
        <div v-for="(company) in companies" :key="company.id">
          <organism-campany-list-item
            :name="company.name"
            :vision="company.vision"
            :thumbnail="company.company_thumbnail_url"
            :icon-url="company.icon_url"
            :tags="company.tags"
          />
          <p class="company-border"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrganismCampanyListItem from "@/components/organism/OrganismCampanyListItem.vue";
export default {
  components: { OrganismCampanyListItem },
  layout: "NoCircleNoFooterLayout",
  async asyncData({ $axios }) {
    const companies = await $axios.get('/companies')
    return {
      companies: companies.data
    };
  },
};
</script>

<style lang="scss" scope>
.company-list__container {
  @include pc {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: $paddingPc;
    padding-right: $paddingPc;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    >* {
      width: 48%;
      margin-top: 2%;
      margin-bottom: 2%;
    }

    .l-container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
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