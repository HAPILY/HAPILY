<template>
  <div class="image-input">
    <input
      v-show="false"
      ref="image"
      :accept="accept"
      name="title_image"
      type="file"
      @change="postImage($event)"
    />
    <atom-icon
      name="photograph"
      class="photograph-icon"
      @click="clickInputFile"
    />
  </div>
</template>

<script>
export default {
  name: "ImageInput",
  props: {
    accept: {
      type: String,
      default: "image/*",
    },
  },
  methods: {
    postImage(event) {
      this.$emit("postImage", event);
    },
    clickInputFile() {
      this.$emit("clickInputFile");
    },
  },
};
</script>
