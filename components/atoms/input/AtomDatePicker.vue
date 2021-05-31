<template>
  <div class="date-input">
    <date-picker
      v-model="date"
      :language="_ja"
      :format="DatePickerFormat"
      input-class="date-picker"
    ></date-picker>
    <div class="line"></div>
  </div>
</template>

<script>
import { ja } from "vuejs-datepicker/dist/locale";
import { computed, defineComponent } from "@nuxtjs/composition-api";
const moment = require("moment");

export default defineComponent({
  props: {
    value: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const _ja = ja;
    const DatePickerFormat = "yyyy-MM-dd";
    const date = computed({
      get() {
        return props.value;
      },
      set(value) {
        emit("input", moment(value).format("YYYY-MM-DD"));
      },
    });
    return {
      _ja,
      date,
      DatePickerFormat,
    };
  },
});
</script>

<style lang="scss" scoped>
.line {
  position: relative;
  border-top: 1px solid;
  &::before,
  &::after {
    position: absolute;
    bottom: 0px;
    width: 0px;
    height: 1px;
    content: "";
    background-color: #3be5ae;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  &::before {
    left: 50%;
  }
  &::after {
    right: 50%;
  }
  .date-input:focus-within + &::before,
  .date-input:focus-within + &::after {
    width: 50%;
  }
}
</style>