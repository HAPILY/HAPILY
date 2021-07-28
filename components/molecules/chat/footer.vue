<template>
  <div class="chat-footer" ref="chatFooter">
    <div class="footer__inner">
      <div class="chat-input-area">
        <div class="chat-input-area-content">
          <div class="content__inner" ref="refInputContent">
            <atom-textarea
              :key="inputReset"
              v-model="chatInputText"
              class="chat-input"
            />
            <atom-icon name="photograph" class="photograph-icon" />
            <atom-icon
              @click="chatPost"
              name="arrowright"
              class="arrowright-icon"
            />
          </div>
          <div class="chat-template" ref="refTemplate">
            <span @click="toggleTemplateActive"
              >{{ openCloseSymbol }} テンプレート文を入れる
            </span>
            <chat-template
              v-show="isShowTemplate"
              @select="getSelectTemplateContent"
              class="chat-template-content"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatTemplate from "@/components/organism/chat/chatTemplate.vue";
import AtomIcon from "@/components/atoms/icon/AtomIcon.vue";
import AtomTextarea from "@/components/atoms/input/AtomTextarea.vue";

export default {
  name: "ChatFooter",
  components: {
    ChatTemplate,
    AtomIcon,
    AtomTextarea,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    inputReset: {
      type: Number,
      default: 0,
    },
    isShowTemplate: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    chatInputText: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
    openCloseSymbol() {
      if (this.isShowTemplate) {
        return "-";
      } else {
        return "+";
      }
    },
  },
  methods: {
    chatPost() {
      this.$emit("chatPost");
    },
    toggleTemplateActive() {
      this.$emit("toggleTemplateActive");
    },
    getSelectTemplateContent(value) {
      this.$emit("getSelectTemplateContent", value);
    },
  },
};
</script>

<style lang="scss" scoped>
$footerHeght: 100px;

.chat {
  &-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ffffff;
    width: 100%;
    height: $footerHeght;
    min-height: $footerHeght;
    border-top: 1px solid #dddddd;
  }

  &-input-area-content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    .content__inner {
      display: flex;
    }
  }

  &-input {
    width: 85%;
    margin-left: 30px;
    margin-top: 15px;
    height: auto;
    min-height: 44px;
  }

  &-template {
    margin-top: 6px;
    margin-left: 30px;
    font-size: 12px;
    font-weight: 300;
    color: map-get($color, blue, default);
    &-content {
      margin-top: 5px;
    }
  }
}

.footer__inner {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.footer-blanc {
  height: $footerHeght;
}

.photograph-icon,
.arrowright-icon {
  width: 25px;
  height: 30px;
  margin-top: 23px;
  margin-left: 10px;
}

.chat-input-area {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
