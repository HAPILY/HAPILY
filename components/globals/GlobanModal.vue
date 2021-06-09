<template>
  <molecules-modal v-model="isAvtive" full-screen>
    <template #header>
      自己紹介文
    </template>
    <template #content>
      <div>
        <textarea v-model="textData"></textarea>
      </div>
    </template>
  </molecules-modal>
</template>

<script>
import MoleculesModal from '@/molecules/user/MoleculesModal.vue'
export default {
  components: { MoleculesModal }
}
</script>

<style>
</style>
