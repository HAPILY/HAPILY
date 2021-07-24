<template>
  <div>
    <molecules-modal v-model="localAvtive" fullScreen>
      <template v-slot:header>自己紹介文</template>
      <template v-slot:content
        ><div class="ly-modal">
          <label>見出し</label>
          <atom-input-text
            v-model="cProfileTitle"
            class="mb-10"
          ></atom-input-text>
          <label>あなたの熱い夢を語ろう</label>
          <atom-textarea
            v-model="cProfileTextData"
            class="mb-10"
          ></atom-textarea>
          <atom-button class="w-full" @click="saveProfile">保存</atom-button>
        </div>
      </template>
    </molecules-modal>
    <atom-button class="w-full" @click="showModal">編集</atom-button>
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  ref,
  reactive,
  watch,
} from "@nuxtjs/composition-api";
import AtomButton from "../atoms/button/AtomButton.vue";
export default defineComponent({
  components: { AtomButton },
  props: {
    profileTitle: {
      type: String,
      default: "",
    },
    profileTextData: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      title: props.profileTitle,
      textData: props.profileTextData,
    });

    const localAvtive = ref(false);

    watch(localAvtive, (_new) => {
      if (!_new) {
        emit("close", false);
      }
    });

    const showModal = () => {
      localAvtive.value = true;
    };

    const saveProfile = () => {
      emit("update:profile", state);
      localAvtive.value = false;
    };

    const cProfileTitle = computed({
      get() {
        return state.title;
      },
      set(value) {
        state.title = value;
      },
    });

    const cProfileTextData = computed({
      get() {
        return state.textData;
      },
      set(value) {
        state.textData = value;
      },
    });

    return {
      cProfileTitle,
      cProfileTextData,
      showModal,
      localAvtive,
      saveProfile,
    };
  },
});
</script>

<style></style>
