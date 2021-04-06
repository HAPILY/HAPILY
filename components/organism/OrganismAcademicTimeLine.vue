<template>
  <div class="academic">
    <molecules-progress-box :items="academic">
      <template slot-scope="{ item }">
        <h1 class="academic-title font-black text-xl">
          {{ item.title }}
        </h1>
        <dt class="font-black text-base">{{ item.subTitle }}</dt>
        <dd class="text-sm career-date">
          <span v-if="item.graduationDate">{{ item.graduationDate }} 卒業</span>
          <atom-tag v-else>在籍中</atom-tag>
        </dd>
      </template>
    </molecules-progress-box>
  </div>
</template>

<script>
import MoleculesProgressBox from "@/components/molecules/user/MoleculesProgressBox.vue";
import AtomTag from "@/components/atoms/tag/AtomTag.vue";
export default {
  props: {
    academic: {
      type: Array,
    },
  },
  components: {
    MoleculesProgressBox,
    AtomTag,
  },
};
</script>

<style>
</style>