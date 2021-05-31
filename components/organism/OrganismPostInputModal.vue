<template>
  <div>
    <molecules-modal v-model="localAvtive" fullScreen>
      <template v-slot:header>記事の追加</template>
      <template v-slot:content
        ><div class="ly-modal">
          <div class="tag-input-area p-4 bl-box1">
            <label>タイトル</label>
            <atom-border-input class="bl-mb-20" v-model="title" />
            <label>URL</label>
            <atom-border-input class="bl-mb-20" v-model="url" />
          </div>
          <atom-button class="w-full" @click="addItem">追加する</atom-button>
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
import MoleculesDatePicker from "@/components/molecules/MoleculesDatePicker.vue";
import MoleculeNestedArea from "@/components/molecules/user/MoleculeNestedArea.vue";

const moment = require("moment");

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
  setup(props, { emit }) {
    const newItem = reactive({
      title: "",
      url: "",
      thumbnail: "",
      postDate: moment(new Date()).format("YYYY年M月DD日"),
    });
    const addItem = () => {
      localAvtive.value = false;
      emit("add", newItem);
    };
    const showModal = () => (localAvtive.value = true);
    const localAvtive = ref(false);

    watch(localAvtive, (_new, _old) => {
      if (!_new) {
        emit("close", false);
      }
    });

    return {
      ...toRefs(newItem),
      addItem,
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