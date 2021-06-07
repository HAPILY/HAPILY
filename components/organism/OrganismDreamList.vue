<template>
  <div class="dream-list">
    <div class="dream-list__inner">
      <molecule-dream-list-item />
      <molecule-dream-list-item />
      <molecule-dream-list-item />
      <molecule-dream-list-item />
      <molecule-dream-list-item />
    </div>
  </div>
</template>

<script>
import MoleculeDreamListItem from "../molecules/user/MoleculeDreamListItem.vue";
export default {
  components: { MoleculeDreamListItem },
};
</script>

<style>
</style>