<template>
  <a :href="`/user/dream/${id}`" class="dream-item">
    <div class="dream-item__inner">
      <div class="left">
        <div class="left__inner">
          <div class="dream-thumbnail" :style="{ backgroundImage: 'url(' + thumbnail + ')' }">
            <img class="icon-heart" src="@/assets/img/common/heart.svg" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right__inner">
          <p class="title">
            {{ title }}
          </p>
          <span class="username">@{{ userName }}</span>
          <div class="money">
            <img class="en-icon" src="@/assets/img/common/en.svg" />
            <span class="font-bold">{{ money.toLocaleString() }}</span
            ><span class="text-sm">円</span>
          </div>
          <img
            class="rounded-full user-thumbnail"
            :src="userIconUrl"
          />
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'MoleculeDreamListItem',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    money: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
      default: '',
    },
    userName: {
      type: String,
      default: ''
    },
    userIconUrl: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scope>
.dream-item {
  height: 115px;
  border-bottom: 1px solid #ddd;
  display: block;
  .dream-item__inner {
    display: flex;
  }
  .left {
    width: 55%;
    .dream-thumbnail {
      padding-top: 56.25%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      position: relative;
      .icon-heart {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 5px;
        top: 5px;
      }
    }
  }

  .right {
    width: 45%;
    .title {
      width: 90%;
      padding-left: 15px;
      padding-right: 10px;
      font-size: 0.7rem;
    }
    .en-icon {
      width: 10px;
      height: 10px;
      display: inline-block;
    }
    .username {
      padding-left: 10px;
      font-size: 0.4rem;
    }
    .money {
      padding-top: 1px;
      padding-left: 10px;
      margin-top: 15px;
    }
    .right__inner {
      position: relative;
    }
    .user-thumbnail {
      width: 35px;
      height: 35px;
      position: absolute;
      right: 25px;
      bottom: 17px;
    }
  }
}
</style>