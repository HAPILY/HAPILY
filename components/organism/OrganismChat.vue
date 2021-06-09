<template>
  <div class="chat">
    <div class="chat-header">
      <div class="chat-header__inner">
        <div class="profile-img">
          <img
            class="rounded-full thumbnail"
            src="@/assets/img/students/students_img0.jpg"
          />
        </div>
        <div class="profile-info">
          <h1 class="user-name">
            山田太郎
          </h1>
          <div class="sub-info">
            <p class="contact">
              yamada@mail.jp
            </p>
            <p class="location">
              <atom-icon name="location" class="location-icon" />神奈川県
            </p>
          </div>
        </div>
      </div>
    </div>
    <div ref="chatContent" class="chat-content">
      <div class="header-blanc" />
      <div
        v-for="(items, key, index) in chatData"
        :key="index"
        class="chat-block"
      >
        <p class="chat-datetime">
          {{ key }}
        </p>
        <chat-area
          v-for="(item, _index) in items"
          :key="_index"
          :post-time="item.postDateTime"
          :kind="isMy(item.user)"
          :class="isMy(item.user)"
          style="margin-bottom: 10px"
        >
          {{ item.content }}
        </chat-area>
      </div>
      <div ref="footerBlanc" class="footer-blanc" />
    </div>
    <div ref="chatFooter" class="chat-footer">
      <div class="footer__inner">
        <div class="chat-input-area">
          <div class="chat-input-area-content">
            <div ref="refInputContent" class="content__inner">
              <atom-textarea
                :key="inputReset"
                v-model="chatInputText"
                class="chat-input"
              />
              <atom-icon name="photograph" class="photograph-icon" />
              <atom-icon
                name="arrowright"
                class="arrowright-icon"
                @click="chatPost"
              />
            </div>
            <div ref="refTemplate" class="chat-template">
              <span @click="isTemplateActive">{{ openCloseSymbol }} テンプレート文を入れる
              </span>
              <chat-template
                v-show="isShowTempale"
                class="chat-template-content"
                @select="getSelectTemplateContent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {

  computed,
  ref,
  reactive,
  watch,
  toRefs,
  onMounted,
  onUpdated
} from '@nuxtjs/composition-api'
import AtomIcon from '../atoms/icon/AtomIcon.vue'
import ChatArea from '../molecules/chat/chatArea.vue'
import AtomTextarea from '../atoms/input/AtomTextarea.vue'
import ChatTemplate from './chat/chatTemplate.vue'
const moment = require('moment')
export default {
  components: { AtomIcon, ChatArea, ChatTemplate, AtomTextarea },
  setup () {
    const chatFooter = ref()
    const footerBlanc = ref()
    const chatContent = ref()
    const refTemplate = ref()
    const refInputContent = ref()
    const inputReset = ref(0)
    let tempRefTemplateHeight = 0
    let tempRefInputContentHeight
    let defaultRefInputContentHeight = 0
    const updateFooterHeight = (heigth) => {
      chatFooter.value.style.height = heigth + 'px'
      updateFooterBlancHeight(heigth)
    }
    onMounted(() => {
      tempRefInputContentHeight = defaultRefInputContentHeight =
        refInputContent.value.clientHeight
      window.scroll(0, chatContent.value.scrollHeight)
    })
    const updateFlog = {
      chatPost: false,
      oepnTemplate: false,
      chatInput: false
    }
    const updateFooterBlancHeight = heigth =>
      (footerBlanc.value.style.height = heigth + 'px')

    onUpdated(() => {
      if (updateFlog.chatInput) {
        updateFlog.chatInput = false
        if (refInputContent.value.clientHeight > tempRefInputContentHeight) {
          updateFooterHeight(
            chatFooter.value.clientHeight +
              (refInputContent.value.clientHeight - tempRefInputContentHeight)
          )
          tempRefInputContentHeight = refInputContent.value.clientHeight
        } else if (
          refInputContent.value.clientHeight < tempRefInputContentHeight
        ) {
          updateFooterHeight(
            chatFooter.value.clientHeight -
              (tempRefInputContentHeight - refInputContent.value.clientHeight)
          )
          tempRefInputContentHeight = refInputContent.value.clientHeight
        }
      }
      if (updateFlog.chatPost) {
        updateFlog.chatPost = false
        if (refInputContent.value.clientHeight > defaultRefInputContentHeight) {
          updateFooterHeight(
            chatFooter.value.clientHeight -
              (refInputContent.value.clientHeight -
                defaultRefInputContentHeight)
          )
        }
        inputReset.value++
        tempRefInputContentHeight = defaultRefInputContentHeight
        window.scroll(0, chatContent.value.scrollHeight)
      }

      if (updateFlog.oepnTemplate) {
        updateFlog.oepnTemplate = false
        if (isShowTempale.value) {
          tempRefTemplateHeight = refTemplate.value.clientHeight
          updateFooterHeight(
            chatFooter.value.clientHeight + tempRefTemplateHeight
          )
        } else {
          updateFooterHeight(
            chatFooter.value.clientHeight - tempRefTemplateHeight
          )
        }
      }
    })
    const getSelectTemplateContent = (value) => {
      state.chatInputText = value
      inputReset.value++
      updateFlog.chatInput = true
    }
    const state = reactive({
      chatInputText: '',
      chatData: {
        [moment(Date.parse('2021/5/14')).format('yyyy/M/DD')]: [
          {
            chatId: 1,
            user: 1,
            content: '楽',
            postDateTime: '11:08'
          },
          {
            chatId: 2,
            user: 2,
            content: '楽しかったね',
            postDateTime: '11:08'
          },
          {
            chatId: 3,
            user: 1,
            content: '楽しかったね',
            postDateTime: '11:08'
          }
        ],
        [moment(Date.parse('2021/5/20')).format('yyyy/M/DD')]: [
          {
            chatId: 1,
            user: 1,
            content:
              '楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね',
            postDateTime: '11:08'
          },
          {
            chatId: 2,
            user: 2,
            content:
              '楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね',
            postDateTime: '11:08'
          },
          {
            chatId: 3,
            user: 1,
            content: '楽しかったね',
            postDateTime: '11:08'
          },
          {
            chatId: 1,
            user: 1,
            content:
              '楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね',
            postDateTime: '11:08'
          },
          {
            chatId: 2,
            user: 2,
            content:
              '楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね楽しかったね',
            postDateTime: '11:08'
          },
          {
            chatId: 3,
            user: 1,
            content: '楽しかったね',
            postDateTime: '11:08'
          }
        ]
      }
    })
    const chatPost = () => {
      if (state.chatInputText.length > 0) {
        const initDate = moment()
        const initKey = initDate.format('yyyy/M/DD')
        const postDate = initDate.format('h:mm')
        const postData = {
          chatId: 99,
          user: 1,
          content: state.chatInputText,
          postDateTime: postDate
        }
        if (state.chatData[initKey]) {
          state.chatData[initKey].push(postData)
        } else {
          state.chatData[initKey] = [postData]
        }
        updateFlog.chatPost = true
        state.chatInputText = ''
      }
    }
    const openCloseSymbol = computed(() => {
      if (isShowTempale.value) {
        return '-'
      }
      return '+'
    })
    const isShowTempale = ref(false)
    const isTemplateActive = () => {
      isShowTempale.value = !isShowTempale.value
      updateFlog.oepnTemplate = true
    }
    const myId = 1
    const isMy = id => (id === myId ? 'my' : 'pair')
    watch(
      () => state.chatInputText,
      () => {
        updateFlog.chatInput = true
      }
    )
    return {
      myId,
      isMy,
      isTemplateActive,
      isShowTempale,
      openCloseSymbol,
      chatPost,
      inputReset,
      chatContent,
      getSelectTemplateContent,
      footerBlanc,
      chatFooter,
      refTemplate,
      refInputContent,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
$footerHeght: 100px;

.chat {
  font-family: "Hiragino Kaku Gothic ProN";
  &-header {
    background: map-get($color, yellow, default);
    height: 140px;
    width: 100%;
    padding-top: 53px;
    padding-left: 25px;
    position: fixed;
    left: 0;
    top: 0;
    &__inner {
      display: flex;
      width: 70%;
      .profile {
        &-img {
          margin-right: 20px;
        }
        &-info {
          padding-top: 10px;
        }
      }
    }
  }
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

.header-blanc {
  height: 100px;
}

.sub-info {
  display: flex;
}

.user-name {
  font-size: 20px;
  font-weight: 600;
}

.contact,
.location {
  font-size: 10px;
  font-weight: 300;
}

.contact {
  color: map-get($color, blue, default);
}

.thumbnail {
  width: 75px;
}

.location {
  margin-left: 5px;
  &-icon {
    width: 15px;
    display: inline-block;
  }
}

.photograph-icon,
.arrowright-icon {
  width: 25px;
  height: 30px;
  margin-top: 23px;
  margin-left: 10px;
}

.profile-info {
  float: left;
}

.chat-input-area {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
