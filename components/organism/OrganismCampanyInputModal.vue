<template>
  <div class="campany-input-main">
    <molecules-modal v-model="localAvtive" full-screen>
      <template #header>
        {{ headerTitle }}
      </template>
      <template #content>
        <div class="ly-modal">
          <div class="campany-input-area p-4 bl-box1">
            <label>会社名</label>
            <atom-border-input v-model="orgName" class="bl-mb-20" />
            <molecules-date-picker
              class="bl-mb-20"
              :begin-date.sync="beginDate"
              :end-date.sync="endDate"
            >
              <template #begin>
                入社
              </template>
              <template #end>
                退社
              </template>
            </molecules-date-picker>
            <molecule-nested-area
              v-for="(item, index) in jobList"
              :key="index"
              :index="index"
              class="bl-mb-20 clild"
              @remove="removeJob()"
            >
              <label>ポジションについて書いてみよう</label>
              <atom-border-input v-model="item.jobName" class="bl-mb-20" />
              <label>やってきたことを記載してみよう</label>
              <atom-border-text-area
                v-model="item.jobDetail"
                class="bl-mb-20"
              />
            </molecule-nested-area>
            <atom-border-button class="add-job-btn" @click="addJobArea">
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
          jobList: [Object.assign({}, tempJob)]
        }
      }
    },
    headerTitle: {
      type: String,
      default: '職歴の追加'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const status = reactive(Object.assign({}, props.status))
    const localAvtive = ref(props.isActive)

    const removeJob = index => status.jobList.splice(index, 1)
    const addJobArea = () => {
      status.jobList.push(Object.assign({}, tempJob))
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
      removeJob,
      addJobArea,
      ...toRefs(status)
    }
  }
})
</script>

<style lang="scss" scoped>
.add-job-btn {
  width: 100%;
}
.campany-input-main {
  padding: 0px;
}
</style>
