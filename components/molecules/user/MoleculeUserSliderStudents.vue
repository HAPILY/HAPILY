<template>
  <div class="slider-wrap">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <nuxt-link to="/user/profile" class="slide-inner">
          <div
            class="thumb"
            :style="{
              'background-image': `url(${require(`@/assets/img/students/students_img${index}.jpg`)})`
            }"
          ></div>
          <div class="text">
            <p class="name">@{{ item.name }}</p>
            <p>{{ item.text }}</p>
          </div>
          <!-- <ul class="tags">
            <li>
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#5689e2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </i>
              タグ1
            </li>
            <li>
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#5689e2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </i>
              タグ2
            </li>
          </ul> -->
          <p class="support-amount">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#5689e2"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z"
                  clip-rule="evenodd"
                />
              </svg>
            </i>
            <span class="large">1050,000</span>円
          </p>
          <!-- <div class="profile">
            <div class="img">
              <img
                :src="require(`@/assets/img/students/students_img${index}.jpg`)"
                :alt="item.name"
              />
            </div>
          </div> -->
          <!-- <div class="info">
            <p class="percentage">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#5689e2"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </i>
              <span class="large">45</span>%
            </p>
            <p class="supporter">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#5689e2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </i>
              <span class="large">2</span>人
            </p>
            <p class="time">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#5689e2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </i>
              あと<span class="large">2</span>日
            </p>
          </div> -->
          <div class="favorite">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </i>
          </div>
        </nuxt-link>
      </swiper-slide>
    </swiper>
    <div class="arrows">
      <div class="arrow-prev arrow">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            /></svg
        ></i>
      </div>
      <div class="arrow-next arrow">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            /></svg
        ></i>
      </div>
    </div>
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
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 1,
        },
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        centerPadding: 0,
        speed: 7000,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
          767: {
            slidesPerView: 1.4,
            centerPadding: "10%",
            speed: 600,
            autoplay: {
              delay: 2000,
            },
            navigation: {
              nextEl: ".arrow-next",
              prevEl: ".arrow-prev"
            },
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.slider-wrap {
  position: relative;
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    border-radius: 20px;
    padding: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    background: linear-gradient(to top, #fec22e 0%, #ffe371 80%);

    @include pc {
      display: none;
    }
    i {
      display: block;
      width: 22px;
    }
    svg {
      fill: #fff;
    }
    &-prev {
      left: 9%;
    }
    &-next {
      right: 9%;
    }
  }
}
.swiper-slide {
  padding: 0 16px;

  @include pc{
    width: vw-pc(400);
  }

  @include pcL {
    width: 400px;
  }
}
::v-deep .swiper-wrapper {
  @include pc {
    transition-timing-function: linear !important;
  }
}
.slide-inner {
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 20px;
  padding: 28px 20px;
  background-color: #fff;
  color: #61677c;
  font-weight: bold;
  // box-shadow: -1px -1px 5px #fff, 1px 1px 3px rgba(#9fa5bd, 0.9);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  background-color: #fff;

  &:hover > * {
    opacity: .7;
  }

  .thumb {
    margin: -28px -20px 14px;
    width: calc(100% + 40px);
    padding-top: 64%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .text {
    position: relative;
    padding: 4px 0 4px 16px;
    font-size: 0.8rem;
    height: 7em;
    width: 100%;
    margin-bottom: 12px;
    overflow: hidden;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      border-radius: 2px;
      background: linear-gradient(to top, #fec22e 0%, #ffe371 80%);
    }
  }

  .support-amount {
    width: 100%;
    text-align: right;
    font-size: 0.8rem;
    svg {
      width: 16px;
      display: inline-block;
    }
    .large {
      font-size: 1.3rem;
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.4em;
    }
  }

  .profile {
    width: 48%;
  }
  .img {
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
  }

  .tags {
    margin-bottom: 4px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    > li {
      font-weight: normal;
      font-size: 0.8rem;
      margin-right: 1em;
    }
    svg {
      width: 12px;
      display: inline-block;
    }
  }

  .info {
    width: 42%;
    margin-left: 9%;
    font-size: 0.8rem;
    svg {
      width: 16px;
      display: inline-block;
    }
    .large {
      font-size: 1.1rem;
      display: inline-block;
      margin-right: 0.4em;
    }
  }
  .name {
    font-weight: normal;
    font-size: 0.8rem;
    margin-bottom: 12px;
    line-height: 1.4;
  }
  .favorite {
    position: absolute;
    right: 20px;
    top: 12px;
    z-index: 5;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#000, 0.1);
      filter: blur(10px);
      z-index: 0;
    }
    svg {
      width: 28px;
      stroke: #fff;
      position: relative;
      z-index: 1;
    }
  }
}
</style>
