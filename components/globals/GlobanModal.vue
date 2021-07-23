<template>
  <molecules-modal v-model="isAvtive" fullScreen>
    <template v-slot:header>自己紹介文</template>
    <template v-slot:content
      ><div>
        <textarea v-model="textData"></textarea></div></template
  ></molecules-modal>
</template>

<script>
import MoleculesModal from "@/molecules/user/MoleculesModal.vue";
export default {
  components: { MoleculesModal },
};
</script>

<style></style>
