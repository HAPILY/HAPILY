<template>
  <div>
    <molecules-modal v-model="localAvtive" full-screen>
      <template #header>
        記事の追加
      </template>
      <template #content>
        <div class="ly-modal">
          <div class="tag-input-area p-4 bl-box1">
            <label>タイトル</label>
            <atom-border-input v-model="title" class="bl-mb-20" />
            <label>URL</label>
            <atom-border-input v-model="url" class="bl-mb-20" />
          </div>
          <atom-button class="w-full" @click="addItem">
            追加する
          </atom-button>
        </div>
      </template>
    </molecules-modal>
    <div class="ignition" @click="showModal">
      <slot name="ignition"></slot>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  watch,
  toRefs
} from '@nuxtjs/composition-api'
import AtomButton from '@/components/atoms/button/AtomButton.vue'
import AtomBorderInput from '@/components/atoms/input/AtomBorderInput.vue'

const moment = require('moment')

export default defineComponent({
  components: {
    AtomButton,
    AtomBorderInput
  },
  setup ({ emit }) {
    const newItem = reactive({
      title: '',
      url: '',
      thumbnail: '',
      postDate: moment(new Date()).format('YYYY年M月DD日')
    })
    const addItem = () => {
      localAvtive.value = false
      emit('add', newItem)
    }
    const showModal = () => (localAvtive.value = true)
    const localAvtive = ref(false)

    watch(localAvtive, (_new, _old) => {
      if (!_new) {
        emit('close', false)
      }
    })

    return {
      ...toRefs(newItem),
      addItem,
      showModal,
      localAvtive
    }
  }
})
</script>

<style lang="scss" scoped>
.add-job-btn {
  width: 100%;
}
</style>
