<template>
  <div class="chat">
    <ChatHeader :profile="type === 'user' ? company : user" :type="type" />
    <div class="chat-content" ref="chatContent">
      <div class="header-blanc" />
      <div
        class="chat-block"
        v-for="(items, key, index) in messages"
        :key="index"
      >
        <p class="chat-datetime">{{ key }}</p>
        <chat-area
          v-for="item in items"
          :postTime="formatDate(item.send_date)"
          :kind="isMy(item.user_type)"
          :class="isMy(item.user_type)"
          :key="item.id"
          style="margin-bottom: 10px"
          >{{ item.content }}</chat-area
        >
      </div>
      <div class="footer-blanc" ref="footerBlanc" />
    </div>
    <ChatFooter
      v-model="chatInputText"
      :input-reset="inputReset"
      :is-show-template="isShowTemplate"
      @chatPost="chatPost"
      @imagePost="imagePost"
      @toggleTemplateActive="toggleTemplateActive"
      @getSelectTemplateContent="getSelectTemplateContent"
    />
  </div>
</template>

<script>
import AtomIcon from "../atoms/icon/AtomIcon.vue";
import ChatArea from "../molecules/chat/chatArea.vue";
import AtomInputText from "../atoms/input/AtomInputText.vue";
import ChatTemplate from "./chat/chatTemplate.vue";
import AtomTextarea from "../atoms/input/AtomTextarea.vue";
import ChatHeader from "@/components/molecules/chat/header.vue";
import ChatFooter from "@/components/molecules/chat/footer.vue";

const moment = require("moment");

export default {
  components: {
    AtomIcon,
    ChatArea,
    AtomInputText,
    ChatTemplate,
    AtomTextarea,
    ChatHeader,
    ChatFooter,
  },
  props: {
    chatData: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: "user",
    },
  },
  data() {
    return {
      inputReset: 0,
      chatInputText: "",
      isShowTemplate: false,
      defaultFooterHeight: 100,
      textareaHeight: 48,
    };
  },
  computed: {
    user() {
      return this.chatData.user || {};
    },
    company() {
      return this.chatData.company || {};
    },
    messages() {
      const arr = {};
      this.chatData.messages.forEach((result) => {
        const date = moment(result.send_date).format("yyyy/M/DD");
        if (!arr[date]?.length) {
          arr[date] = [];
        }

        arr[date].push({
          ...result,
        });
      });
      return arr || {};
    },
  },
  watch: {
    chatInputText() {
      const chatInput = document.querySelector(".chat-input");
      if (chatInput.clientHeight > this.textareaHeight) {
        // 行増加
        console.log("chatInput.clientHeight1", chatInput.clientHeight);
        this.textareaHeight = chatInput.clientHeight;
        this.updateFooterHeight(
          this.defaultFooterHeight + this.textareaHeight / 2
        );
      } else if (chatInput.clientHeight < this.textareaHeight) {
        // 行減少
        this.textareaHeight = chatInput.clientHeight;
        console.log("chatInput.clientHeight2", chatInput.clientHeight);
        this.updateFooterHeight(
          this.defaultFooterHeight + this.textareaHeight / 2
        );
      }
    },
  },
  mounted() {
    const chatContent = document.querySelector(".chatContent");
    window.scroll(0, chatContent?.scrollHeight);
  },
  methods: {
    // chat送信
    chatPost() {
      if (!this.chatInputText) {
        return;
      }

      const initDate = moment();
      const postDate = initDate.format("YYYY/M/DD h:mm");
      const params = {
        content: this.chatInputText,
        image: "",
        send_date: postDate,
        user_type: this.type,
        user_id: this.user.id || 0,
        company_id: this.company.id || 0,
      };
      console.log("params", params);
      this.$emit("sendChat", params);
      this.inputReset++;
      this.chatInputText = "";
    },
    imagePost(imageData) {
      if (!imageData) {
        return;
      }

      const initDate = moment();
      const postDate = initDate.format("YYYY/M/DD h:mm");
      const params = {
        content: "",
        image: imageData,
        send_date: postDate,
        user_type: this.type,
        user_id: this.user.id || 0,
        company_id: this.company.id || 0,
      };
      this.$emit("sendChat", params);
      this.inputReset++;
      this.chatInputText = "";
    },
    toggleTemplateActive() {
      console.log("isTemplateActive");
      this.isShowTemplate = !this.isShowTemplate;

      this.$nextTick(() => {
        const chatTemplate = document.querySelector(".chat-template");
        this.updateFooterHeight(
          this.defaultFooterHeight + chatTemplate.clientHeight
        );
      });
    },
    getSelectTemplateContent(value) {
      console.log("getSelectTemplateContent");
      this.chatInputText = value;
      this.inputReset++;
    },
    updateFooterBlancHeight(height) {
      console.log("updateFooterBlancHeight");
      const footerBlanc = document.querySelector(".footer-blanc");
      footerBlanc.style.height = `${height}px`;
    },
    updateFooterHeight(height) {
      console.log("updateFooterHeight");
      const chatFooter = document.querySelector(".chat-footer");
      chatFooter.style.height = `${height}px`;
      this.updateFooterBlancHeight(height);
    },
    formatDate(date) {
      return moment(date).format("h:mm");
    },
    isMy(type) {
      return this.type === type ? "my" : "pair";
    },
  },
};
</script>

<style lang="scss" scoped>
$footerHeght: 100px;

.chat {
  font-family: "Hiragino Kaku Gothic ProN";

  &-content {
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &-block {
    display: grid;
    margin-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    .my {
      margin-left: auto;
    }
    .pair {
      margin-right: auto;
    }
  }
  &-datetime {
    padding-left: 15px;
    margin-bottom: 10px;
    color: map-get($color, blue, default);
  }
}

.footer-blanc {
  height: $footerHeght;
}

.header-blanc {
  height: 100px;
}

.sub-info {
  display: flex;
}
</style>
