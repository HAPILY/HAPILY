<template>
  <img :src="iconComponent" @click="click" :style="style" />
</template>

<script>
import { computed, defineComponent } from "@nuxtjs/composition-api";
import Icons from "./index";

export default defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(Icons, value);
      },
    },
    color: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const styleMap = { "--color": props.color };
    const iconComponent = computed(() => Icons[props.name]);
    const click = (e) => emit("click", e);
    const style = computed(() => styleMap);
    return {
      iconComponent,
      click,
      style,
    };
  },
});
</script>

<style lang="scss" scoped>
img {
  color: var(--color);
  fill: var(--color);
  stroke: var(--color);
}
</style>
