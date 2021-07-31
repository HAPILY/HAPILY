<!-- 
https://tailwindcss.com/docs/grid-column
tailwindcssに依存。
grid grid-cols-3 col-span-2
 -->

<template>
  <a :href="url" target="_blank" class="grid grid-cols-3">
    <div class="col-span-2 content"><slot name="content"></slot></div>
    <div class="thumbnail"><slot name="thumbnail"></slot></div>
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped>
.thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
