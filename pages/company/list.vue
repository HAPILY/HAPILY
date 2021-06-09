<template>
  <div class="company-list">
    <div class="company-list__inner">
      <p class="title-border">
        会社一覧
      </p>
      <div class="company-list__container">
        <div v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
          <organism-campany-list-item />
          <p class="company-border"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrganismCampanyListItem from '@/components/organism/OrganismCampanyListItem.vue'
export default {
  components: { OrganismCampanyListItem },
  layout: 'NoCircleNoFooterLayout'
}
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
