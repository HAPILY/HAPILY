<template>
  <div class="global-menu-input">
    <i v-if="icon">
      <atom-icon :name="icon" />
    </i>
    <input
      v-model="computedValue"
      :placeholder="placeholder"
      :type="type"
      :id="id"
      @blur="$emit('blur', $event)"
      @keydown.enter="onKeydownEnter($event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
    },
    id: {
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
  methods: {
    onKeydownEnter(e) {
      // Enterキー押下でイベント発動 日本語変換のEnterでは発動しない
      if (e.keyCode !== 13) return;
      this.$emit("keydownEnter", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.global-menu-input {
  position: relative;
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    width: 24px;
    z-index: 2;
    pointer-events: none;
  }
}
input {
  appearance: none;
  border: none;
  outline: transparent;
  background-color: transparent;
  width: 100%;
  height: 48px;
  padding: 10px 10px 10px 44px;
  @include pc {
    height: 56px;
  }
  &::placeholder {
    color: map-get($color, blue, default);
  }
}
</style>
