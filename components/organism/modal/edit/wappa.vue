<template>
  <div class>
    <molecules-modal v-model="localAvtive" fullScreen>
      <template v-slot:header>{{ headerTitle }}</template>
      <template v-slot:content><slot name="content" /></template>
    </molecules-modal>
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  ref,
  reactive,
  watch,
  toRefs,
} from "@nuxtjs/composition-api";
import AtomButton from "@/components/atoms/button/AtomButton.vue";
import AtomBorderInput from "@/components/atoms/input/AtomBorderInput.vue";
import AtomInputText from "@/components/atoms/input/AtomInputText.vue";
import AtomBorderButton from "@/components/atoms/button/AtomBorderButton.vue";
import AtomIcon from "@/components/atoms/icon/AtomIcon.vue";
import MoleculesDatePicker from "@/components/olecules/MoleculesDatePicker.vue";
import MoleculeNestedArea from "@/components/Molecules/user/MoleculeNestedArea.vue";

const tempJob = {
  jobName: "",
  jobDetail: "",
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
          orgName: "",
          beginDate: "",
          endDate: "",
          classList: [Object.assign({}, tempJob)],
        };
      },
    },
    headerTitle: {
      type: String,
      default: "学歴の追加",
    },
  },
  setup(props, { emit }) {
    const status = reactive(Object.assign({}, props.status));
    const localAvtive = ref(false);

    const removeClass = (index) => status.classList.splice(index, 1);
    const addClassArea = () => {
      status.classList.push(Object.assign({}, tempJob));
    };

    watch(localAvtive, (_new, _old) => {
      if (!_new) {
        emit("close", false);
      }
    });

    const showModal = () => {
      localAvtive.value = true;
    };

    const saveProfile = () => {
      localAvtive.value = false;
    };

    return {
      showModal,
      localAvtive,
      saveProfile,
      removeClass,
      addClassArea,
      ...toRefs(status),
    };
  },
});
</script>

<style lang="scss" scoped>
.add-job-btn {
  width: 100%;
}
</style>