<template>
  <div class="dream-list">
    <section class="list">
      <template>
        <div class="dream-list-header">
          <h1>学生の夢一覧</h1>
        </div>
      </template>
      <organism-dream-list :dreams="dreams" />
    </section>
  </div>
</template>

<script>
import OrganismDreamList from "@/components/organism/OrganismDreamList.vue";

export default {
  components: {
    OrganismDreamList,
  },
  layout: "NoCircleNoFooterLayout",
  async asyncData({ $axios, query }) {
    let dreams;
    if (query && Object.keys(query).length) {
      // 検索からの遷移
      let params = "";
      Object.keys(query).forEach((key) => {
        if (key === "tags") {
          query[key].forEach((tag) => {
            params += `tags%5B%5D=${tag}&`;
          });
        } else {
          params += `${key}=${query[key]}&`;
        }
      });
      // 末尾の&を削除
      const getParams = params.slice(0, -1);
      dreams = await $axios.get(`/v1/dreams?${getParams}`);
    } else {
      dreams = await $axios.get("/v1/dreams");
    }

    return {
      dreams: dreams.data,
    };
  },
};
</script>

<style lang="scss" scoped>
.dream-list-header {
  height: 96px;
  background: map-get($color, yellow, default);
  font-size: 26px;
  font-weight: 600;
  color: white;
  padding-top: 25px;
  padding-left: 15px;
}
</style>
