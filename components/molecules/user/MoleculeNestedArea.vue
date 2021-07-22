<template>
  <div class="job bl-box1 bl-mb-20 p-6">
    　<slot />
    <atom-border-button
      v-if="index !== 0"
      @click="remove"
      class="remove"
      color="red"
    >
      このフォームを削除する
    </atom-border-button>
  </div>
</template>

<script>
import AtomBorderButton from "../../atoms/button/AtomBorderButton.vue";
import AtomIcon from "../../atoms/icon/AtomIcon.vue";
export default {
  components: {
    AtomIcon,
    AtomBorderButton,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    remove() {
      this.$emit("remove", this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.remove {
  margin-left: auto;
  display: block;
}
</style>