<template>
  <div class="dream-list">
    <div class="dream-list__inner">
      <atom-tag class="tag" v-for="(item, index) in tagList" :key="index">
        {{ item.name || item }}
      </atom-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tagList: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.dream-list {
  display: flex;
  justify-content: center;
  align-self: center;
  .dream-list__inner {
    display: flex;
    flex-wrap: wrap;

    .tag {
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 10px;
      margin-right: 5px;
    }
  }
}
</style>