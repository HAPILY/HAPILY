<template>
  <div>
    <molecules-modal v-model="localAvtive" fullScreen>
      <template v-slot:header>やりたいことの追加</template>
      <template v-slot:content>
        <div class="ly-modal">
          <div class="tag-input-area p-4 bl-box1">
            <label>やりたいこと</label>
            <atom-border-input class="bl-mb-20" v-model="newToDo" />
          </div>
          <atom-button class="w-full" @click="addTag">追加する</atom-button>
        </div>
      </template>
    </molecules-modal>
    <div @click="showModal" class="ignition">
      <slot name="ignition"></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
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
    tagList: {
      type: Object,
    },
  },
  setup(_, { emit }) {
    const newToDo = ref("");
    const addTag = () => {
      emit("add", newToDo.value);
      localAvtive.value = false;
    };
    const showModal = () => (localAvtive.value = true);
    const localAvtive = ref(false);

    watch(localAvtive, (_new) => {
      if (!_new) {
        emit("close", false);
      }
    });

    return {
      newToDo,
      addTag,
      showModal,
      localAvtive,
    };
  },
});
</script>

<style lang="scss" scoped>
.add-job-btn {
  width: 100%;
}
</style>
