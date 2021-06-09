<template>
  <div class="">
    <molecules-modal v-model="localAvtive" full-screen>
      <template #header>
        {{ headerTitle }}
      </template>
      <template #content>
        <div class="ly-modal">
          <div class="campany-input-area p-4 bl-box1">
            <label>学校名</label>
            <atom-border-input v-model="orgName" class="bl-mb-20" />
            <molecules-date-picker
              class="bl-mb-20"
              :begin-date.sync="beginDate"
              :end-date.sync="endDate"
            >
              <template #begin>
                入学
              </template>
              <template #end>
                卒業
              </template>
            </molecules-date-picker>
            <molecule-nested-area
              v-for="(item, index) in classList"
              :key="index"
              :index="index"
              class="bl-mb-20 clild"
              @remove="removeClass()"
            >
              <label>学科</label>
              <atom-border-input v-model="item.className" class="bl-mb-20" />
              <label>学んできたことを記載してみよう</label>
              <atom-border-text-area
                v-model="item.classDetail"
                class="bl-mb-20"
              />
            </molecule-nested-area>
            <atom-border-button class="add-job-btn" @click="addClassArea">
              <div class="flex justify-center">
                <atom-icon class="w-4" name="plus" />
                <span>ポジションを追加</span>
              </div>
            </atom-border-button>
          </div>
          <atom-button class="w-full" @click="saveData">
            保存
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
import AtomBorderButton from '@/components/atoms/button/AtomBorderButton.vue'
import AtomIcon from '@/components/atoms/icon/AtomIcon.vue'
import MoleculesDatePicker from '@/components/molecules/MoleculesDatePicker.vue'
import MoleculeNestedArea from '@/components/molecules/user/MoleculeNestedArea.vue'

const tempJob = {
  jobName: '',
  jobDetail: ''
}

export default defineComponent({
  components: {
    AtomButton,
    AtomBorderInput,
    AtomBorderButton,
    AtomIcon,
    MoleculesDatePicker,
    MoleculeNestedArea
  },
  props: {
    status: {
      type: Object,
      default () {
        return {
          orgName: '',
          beginDate: '',
          endDate: '',
          classList: [Object.assign({}, tempJob)]
        }
      }
    },
    headerTitle: {
      type: String,
      default: '学歴の追加'
    }
  },
  setup (props, { emit }) {
    const status = reactive(Object.assign({}, props.status))
    const localAvtive = ref(false)

    const removeClass = index => status.classList.splice(index, 1)
    const addClassArea = () => {
      status.classList.push(Object.assign({}, tempJob))
    }

    watch(localAvtive, (_new, _old) => {
      if (!_new) {
        emit('close', false)
      }
    })

    const showModal = () => {
      localAvtive.value = true
    }

    const saveData = () => {
      emit('save', status)
      localAvtive.value = false
    }

    return {
      showModal,
      localAvtive,
      saveData,
      removeClass,
      addClassArea,
      ...toRefs(status)
    }
  }
})
</script>

<style lang="scss" scoped>
.add-job-btn {
  width: 100%;
}
</style>
