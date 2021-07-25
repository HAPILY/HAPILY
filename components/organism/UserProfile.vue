<template>
  <div class="user-profile_inner l-container">
    <div class="profile">
      <div class="profile__inner">
        <div class="user-info">
          <h1 class="user-info_name font-extrabold text-white">
            <span class="sp:block pc:inline-block pc:mr-1 text-2xl">{{
              userDetail.first_name
            }}</span>
            <span class="sp:block pc:inline-block text-2xl">{{
              userDetail.last_name
            }}</span>
          </h1>
          <p class="mt-1 text-white text-base">
            {{ userDetail.position }}
          </p>
        </div>
        <img
          class="rounded-full user-img"
          src="@/assets/img/students/students_img0.jpg"
        />
      </div>
    </div>
    <div class="slider">
      <MoleculeUserSliderProfile :items="students" :is-show-main="false" />
    </div>
  </div>
</template>

<script>
import MoleculeUserSliderProfile from "@/components/molecules/user/MoleculeUserSliderProfile.vue";

export default {
  name: "UserProfile",
  components: {
    MoleculeUserSliderProfile,
  },
  props: {
    userDetail: {
      type: Object,
      default: () => ({}),
    },
    students: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.user-profile_inner {
  @include pc {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.slider {
  margin-bottom: 8%;

  @include sp {
    @include noGutter;
  }
  @include pc {
    width: 54%;
  }
}

.profile {
  z-index: 100;
  @include sp {
    height: 160px;
  }
  @include pc {
    width: 40%;
    margin-bottom: 10%;
  }

  .user-img {
    width: 28%;
  }

  .profile__inner {
    position: relative;
    display: flex;
    justify-content: space-between;
    .user-info {
      @include sp {
        margin-top: 1.5rem;
        margin-left: 1rem;
      }
      &_name {
        @include pc {
          font-size: vw-pc(36);
        }
        @include pcL {
          font-size: 36px;
        }
      }
    }
    .user-img {
      @include sp {
        margin-top: 5rem;
      }
    }
  }
}
</style>
