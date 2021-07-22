<template>
  <div class="write">
    <molecules-rect-card
      v-for="(item, index) in posts"
      :key="index"
      :url="item.redirect_url"
      class="rect-card"
    >
      <template v-slot:content>
        <h2 class="font">
          {{ item.title }}
        </h2>
        <time>{{ item.created_date }}</time>
      </template>
      <template v-slot:thumbnail>
        <img class="card-thumbnail" :src="item.thumbnail || defaultImage"
      /></template>
    </molecules-rect-card>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      defaultImage: require("~/assets/img/students/students_img0.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.font {
  font-weight: 700;
}
.card-thumbnail {
  width: 100px;
  border-radius: 10px;
  margin: auto;
}

.rect-card {
  width: 80%;
  margin: 15px auto 0;
}
</style>