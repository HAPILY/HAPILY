<template>
  <div>
    <div class="text-area">
      <textarea ref="textarea" v-model="computedValue"></textarea>
      <div class="dummy" ref="dummy"></div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$refs.dummy.textContent = value + "\u200b";
        this.$refs.textarea.style.width = this.$refs.dummy.width;
        this.$refs.textarea.style.height = this.$refs.dummy.height;
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  outline: none;
  font: inherit;
  letter-spacing: inherit;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  resize: none;
}

.text-area {
  position: relative;
  font-size: 1rem;
  line-height: 1.8;
}

.dummy {
  min-height: 120px;
  box-sizing: border-box;
  padding: 5px 15px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
  visibility: hidden;
  min-height: 120px;
}

.line {
  position: relative;
  border-top: 1px solid;
  &::before,
  &::after {
    position: absolute;
    bottom: 0px;
    width: 0px;
    height: 1px;
    content: "";
    background-color: #3be5ae;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
  .text-area:focus-within + &::before,
  .text-area:focus-within + &::after {
    width: 50%;
  }
}
</style>
