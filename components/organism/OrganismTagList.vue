<template>
  <div class="dream-list">
    <div class="dream-list__inner">
      <template v-for="item in tagList">
        <atom-tag class="tag" v-if="item.name" :key="item.id">
          {{ item.name }}
        </atom-tag>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tagList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.dream-list {
  display: flex;
  justify-content: flex-start;
  align-self: center;

  .dream-list__inner {
    display: flex;
    flex-wrap: wrap;
    align-self: center;

    .tag {
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 10px;
      margin-right: 5px;
    }
  }
}
</style>
