<template>
  <molecules-modal v-model="isAvtive" fullScreen>
    <template v-slot:header>{{ title }}</template>
    <template v-slot:content
      ><div>
        <textarea v-model="computedValue"></textarea></div></template
  ></molecules-modal>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    value: {
      tyep: String,
    },
    isAvtive: {
      tyep: Boolean,
      default: false,
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      },
    },
  },
};
</script>

<style></style>
