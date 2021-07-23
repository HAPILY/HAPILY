<template>
  <div class="text-area">
    <textarea
      ref="textarea"
      v-model="computedValue"
      class="input-text"
    ></textarea>
    <div class="dummy" ref="dummy"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  mounted() {
    this.$refs.dummy.textContent = this.value + "\u200b";
    this.$refs.textarea.style.height = this.$refs.dummy.clientHeight + "px";
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$refs.dummy.textContent = value + "\u200b";
        this.$refs.textarea.style.height = this.$refs.dummy.clientHeight + "px";
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scope>
textarea {
  position: absolute;
  left: 0;
  top: 0;
  word-break: break-all;
  resize: none;
}
.text-area {
  position: relative;
  font-size: 1rem;
  line-height: 1.8;
}
.dummy {
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
  visibility: hidden;
  word-break: break-all;
}

.input-text {
  border: 0;
  outline: 0;
  border-radius: 20px;
  padding: 10px;
  background-color: map-get($color, blue, light);
  color: #61677c;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: -1px -1px 2px #fff, 1px 1px 2px rgba(#000, 0.2);
  }

  &:active {
    box-shadow: inset 1px 1px 2px rgba(#000, 0.2), inset -1px -1px 2px #fff;
  }

  .icon {
    margin-right: $ruler/2;
  }

  &.unit {
    border-radius: $ruler/2;
    line-height: 0;
    width: $ruler * 3;
    height: $ruler * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 $ruler/2;
    font-size: $ruler * 1.2;

    .icon {
      margin-right: 0;
    }
  }
}
</style>
