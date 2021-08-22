<template>
  <div class="global-input-tags" ref="tagBox">
    <div class="results">
      <GlobalMenuTag
        v-for="(tag, index) in tags"
        :key="index"
        :text="tag"
        @click="removeTag($event)"
      />
    </div>
    <div class="input">
      <GlobalMenuInput
        v-model="tag"
        icon="tag"
        placeholder="タグを入力"
        id="tagInput"
        @blur="addTag($event.target.value)"
        @keydownEnter="addTag($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag: "",
      tags: [],
    };
  },
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
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
    removeTag(e) {
      // 完全一致でタグ配列から削除
      const reg = new RegExp(`^${e}$`);
      this.tags = this.tags.filter((item) => item.match(reg) === null);
    },
    addTag(e) {
      // タグ入力時のスペースは削除
      const inputWord = e.replace(/\s+/g, "");
      if (!this.tags.includes(inputWord) && inputWord != "") {
        this.tags.push(inputWord);
        const tagInput = document.getElementById("tagInput");
        const scrollHeight = this.$refs.tagBox.scrollHeight;
        this.$nextTick(() => {
          this.$refs.tagBox.scrollTo(0, scrollHeight);
        });
        tagInput.value = "";
        tagInput.focus();
        this.$emit("tags", this.tags);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.global-input-tags {
  padding: 10px;
  max-height: 88px;
  overflow: auto;
  margin-bottom: 4px;
  .results {
    display: flex;
    flex-wrap: wrap;
  }
  .input {
    margin: -10px;
  }
}
</style>
