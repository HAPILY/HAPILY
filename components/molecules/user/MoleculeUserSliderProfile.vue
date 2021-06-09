<template>
  <div class="slider-wrap">
    <swiper ref="swiperMain" :options="swiperOption" class="swiper-main">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="slide-inner">
          <div
            class="thumb"
            :style="{
              'background-image': `url(${require(`@/assets/img/students/students_img${index}.jpg`)})`
            }"
          ></div>
        </div>
      </swiper-slide>
    </swiper>
    <swiper ref="swiperNavi" :options="swiperOptionNavi" class="swiper-navi">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="slide-inner">
          <div
            class="thumb"
            :style="{
              'background-image': `url(${require(`@/assets/img/students/students_img${index}.jpg`)})`
            }"
          ></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOption: {
        loopedSlides: 5,
        speed: 600,
        autoplay: false,
        slidesPerView: 1,
        centeredSlides: true,
        centerPadding: '10%',
        spaceBetween: 0,
        loop: true
      },
      swiperOptionNavi: {
        loopedSlides: 5,
        speed: 600,
        autoplay: false,
        slidesPerView: 6,
        centeredSlides: true,
        centerPadding: '10%',
        spaceBetween: 0,
        navigation: {
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev'
        },
        loop: true,
        slideToClickedSlide: true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperMain = this.$refs.swiperMain.$swiper
      const swiperNavi = this.$refs.swiperNavi.$swiper
      swiperMain.controller.control = swiperNavi
      swiperNavi.controller.control = swiperMain
    })
  }
}
</script>

<style lang="scss" scoped>
.slider-wrap {
  padding-top: 4%;
}
.swiper-main {
  .swiper-slide {
    padding: 0 ($paddingSp * 2);
  }
  .slide-inner {
    width: 100%;
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    position: relative;
    overflow: hidden;

    .thumb {
      width: 100%;
      padding-top: 64%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }
  }
}
.swiper-navi {
  margin-top: 6%;
  .swiper-slide {
    padding: 0 $unit;
  }
  .slide-inner {
    width: 100%;
    border: 0;
    outline: 0;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    position: relative;
    overflow: hidden;

    .thumb {
      width: 100%;
      padding-top: 80%;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
  }
}
</style>
