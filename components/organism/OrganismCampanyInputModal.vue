<template>
  <div class="campany-input-main">
    <molecules-modal v-model="localAvtive" fullScreen>
      <template v-slot:header>{{ headerTitle }}</template>
      <template v-slot:content>
        <div class="ly-modal">
          <div class="campany-input-area p-4 bl-box1">
            <label>会社名</label>
            <atom-border-input class="bl-mb-20" v-model="state.title" />
            <molecules-date-picker
              class="bl-mb-20"
              :beginDate.sync="state.start_date"
              :endDate.sync="state.end_date"
            >
              <template #begin>入社</template>
              <template #end>退社</template>
            </molecules-date-picker>
            <molecule-nested-area
              v-for="(job, index) in state.detail"
              :key="index"
              :index="index"
              @remove="removeJob(index)"
              class="bl-mb-20 clild"
            >
              <label>ポジションについて書いてみよう</label>
              <atom-border-input class="bl-mb-20" v-model="job.position" />
              <label>やってきたことを記載してみよう</label>
              <atom-border-text-area
                class="bl-mb-20"
                v-model="job.job_detail"
              />
            </molecule-nested-area>
            <atom-border-button class="add-job-btn" @click="addJobArea">
              <div class="flex justify-center">
                <atom-icon class="w-4" name="plus" />
                <span>ポジションを追加</span>
              </div>
            </atom-border-button>
          </div>
          <atom-button class="w-full" @click="saveData">保存</atom-button>
        </div>
      </template>
    </molecules-modal>
    <div @click="showModal" class="ignition">
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
} from "@nuxtjs/composition-api";
import AtomButton from "@/components/atoms/button/AtomButton.vue";
import AtomBorderInput from "@/components/atoms/input/AtomBorderInput.vue";
import AtomInputText from "@/components/atoms/input/AtomInputText.vue";
import AtomBorderButton from "@/components/atoms/button/AtomBorderButton.vue";
import AtomIcon from "@/components/atoms/icon/AtomIcon.vue";
import MoleculesDatePicker from "@/components/molecules/MoleculesDatePicker.vue";
import MoleculeNestedArea from "@/components/molecules/user/MoleculeNestedArea.vue";

const tempJob = {
  position: "",
  job_detail: "",
};

export default defineComponent({
  components: {
    AtomButton,
    AtomBorderInput,
    AtomInputText,
    AtomBorderButton,
    AtomIcon,
    MoleculesDatePicker,
    MoleculeNestedArea,
  },
  props: {
    status: {
      type: Object,
      default() {
        return {
          title: '',
          start_date: '',
          end_date: '',
          detail: [
            {
              position: "",
              job_detail: "",
            }
          ]
        }
      },
    },
    headerTitle: {
      type: String,
      default: "職歴の追加",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const state = reactive(Object.assign({}, props.status));
    const localAvtive = ref(props.isActive);

    const removeJob = (index) => {
      state.detail.splice(index, 1);
    }
    const addJobArea = () => {
      state.detail.push(Object.assign({}, tempJob));
    };

    watch(localAvtive, (_new, _old) => {
      if (!_new) {
        emit("close", false);
      }
    });

    const showModal = () => {
      localAvtive.value = true;
    };

    const saveData = () => {
      emit("save", state);
      localAvtive.value = false;
    };

    return {
      showModal,
      localAvtive,
      saveData,
      removeJob,
      addJobArea,
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-job-btn {
  width: 100%;
}
.campany-input-main {
  padding: 0px;
}
</style>