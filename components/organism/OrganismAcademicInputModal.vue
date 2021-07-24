<template>
  <div class="">
    <molecules-modal v-model="localAvtive" fullScreen>
      <template v-slot:header>{{ headerTitle }}</template>
      <template v-slot:content
        ><div class="ly-modal">
          <div class="campany-input-area p-4 bl-box1">
            <label>学校名</label>
            <atom-border-input class="bl-mb-20" v-model="state.title" />
            <molecules-date-picker
              class="bl-mb-20"
              :beginDate.sync="state.start_date"
              :endDate.sync="state.end_date"
              ><template #begin>入学</template>
              <template #end>卒業</template>
            </molecules-date-picker>
            <molecule-nested-area class="bl-mb-20 clild">
              <label>学科</label>
              <atom-border-input class="bl-mb-20" v-model="state.class_name" />
              <!-- <label>学んできたことを記載してみよう</label>
              <atom-border-text-area
                class="bl-mb-20"
                v-model="item.classDetail"
              /> -->
            </molecule-nested-area>
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
import { defineComponent, ref, reactive, watch } from "@nuxtjs/composition-api";
import AtomButton from "@/components/atoms/button/AtomButton.vue";
import AtomBorderInput from "@/components/atoms/input/AtomBorderInput.vue";
import AtomInputText from "@/components/atoms/input/AtomInputText.vue";
import AtomBorderButton from "@/components/atoms/button/AtomBorderButton.vue";
import AtomIcon from "@/components/atoms/icon/AtomIcon.vue";
import MoleculesDatePicker from "@/components/molecules/MoleculesDatePicker.vue";
import MoleculeNestedArea from "@/components/molecules/user/MoleculeNestedArea.vue";

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
          title: "",
          tart_date: "",
          end_date: "",
          class_name: "",
        };
      },
    },
    headerTitle: {
      type: String,
      default: "学歴の追加",
    },
  },
  setup(props, { emit }) {
    const state = reactive(Object.assign({}, props.status));
    const localAvtive = ref(false);

    watch(localAvtive, (_new) => {
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
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-job-btn {
  width: 100%;
}
</style>
