<template>
  <div>
    <molecules-modal v-model="localAvtive" full-screen>
      <template #header>
        やりたいことの追加
      </template>
      <template #content>
        <div class="ly-modal">
          <div class="tag-input-area p-4 bl-box1">
            <label>やりたいこと</label>
            <atom-border-input v-model="newToDo" class="bl-mb-20" />
          </div>
          <atom-button class="w-full" @click="addTag">
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
  watch
} from '@nuxtjs/composition-api'
import AtomButton from '@/components/atoms/button/AtomButton.vue'
import AtomBorderInput from '@/components/atoms/input/AtomBorderInput.vue'

export default defineComponent({
  components: {
    AtomButton,
    AtomBorderInput
  },
  props: {
    tagList: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  setup ({ emit }) {
    const newToDo = ref('')
    const addTag = () => {
      localAvtive.value = false
      emit('add', newToDo.value)
    }
    const showModal = () => (localAvtive.value = true)
    const localAvtive = ref(false)

    watch(localAvtive, (_new, _old) => {
      if (!_new) {
        emit('close', false)
      }
    })

    return {
      newToDo,
      addTag,
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
