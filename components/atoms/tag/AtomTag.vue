<template>
  <h2 class="tag" :style="style"><slot></slot></h2>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "blue",
    },
  },
  computed: {
    style() {
      return {
        "--color": this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-weight: bold;
  padding: 4px 4px 6px;
  line-height: 1.4;
  min-width: 60px;
  background-color: var(--color);
  font-size: 0.85rem;

  @include pc {
    font-size: 0.7rem;
  }
}
</style>
