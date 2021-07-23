<template>
  <div class="temp">
    <ul type="square">
      <li
        class="temp-item"
        v-for="(item, i) in templates"
        :key="i"
        @click="selectTemplate(i)"
      >
        <span class="name">{{ item.name }}</span>
        <span class="content">{{ item.content }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
export default defineComponent({
  setup(_, { emit }) {
    const selectTemplate = (selectIndex) =>
      emit("select", templates[selectIndex].content);
    const templates = [
      {
        name: "挨拶文",
        content: "お問い合わせありがとうございます テキスト",
      },
      {
        name: "挨拶文",
        content: "お問い合わせありがとうございます テキスト",
      },
      {
        name: "挨拶文",
        content: "お問い合わせありがとうございます テキスト",
      },
      {
        name: "挨拶文",
        content: "お問い合わせありがとうございます テキスト",
      },
    ];
    return {
      templates,
      selectTemplate,
    };
  },
});
</script>

<style lang="scss" scoped>
.temp {
  padding-left: 26px;
  &-item {
    text-overflow: ellipsis;
    padding-bottom: 5px;
  }
}

.name {
  color: #666666;
  padding-right: 10px;
}

.content {
  color: #cccccc;
}

.temp-item:hover {
  opacity: 0.6;
}
</style>
