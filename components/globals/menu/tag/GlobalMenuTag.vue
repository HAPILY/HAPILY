<template>
  <span class="global-menu-tag">
    {{ text }}
    <i>
      <atom-icon name="cancel" @click="$emit('click', text)" />
    </i>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.global-menu-tag {
  position: relative;
  display: block;
  background-color: #e9eff9;
  border-radius: 20px;
  padding: 1px 24px 2px 8px;
  line-height: 1.2;
  margin: 4px;
  color: map-get($color, blue, default);
  i {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 10px;
  }
}
</style>
