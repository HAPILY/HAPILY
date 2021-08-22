<template>
  <div class="gMenu">
    <div class="container l-container">
      <ul class="gMenu__nav">
        <li>
          <nuxt-link class="gMenu-btn tracking-tighter" to="/dream-list">
            <atom-icon name="inventory" class="icon" />
            やりたいこと一覧
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="gMenu-btn" to="/company-list">
            <atom-icon name="business" class="icon" />
            企業一覧
          </nuxt-link>
        </li>
        <li class="low wide">
          <nuxt-link class="gMenu-btn" to="/mypage">
            <atom-icon name="account" class="icon" />
            マイページ
          </nuxt-link>
        </li>
        <li class="low narrow">
          <nuxt-link class="gMenu-btn" to="">
            <atom-icon name="cog_bl" class="icon" />
            設定
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gMenu {
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  .container {
    max-width: 900px;
  }
  &-btn {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 3px 4px 0 0 #f0c039;
    color: map-get($color, blue, default);
    font-size: 15px;
    font-weight: 500;
    &:hover {
      box-shadow: 3px 2px 0 0 #f0c039 inset;
    }
    @include pc {
      font-size: 20px;
    }
    .icon {
      width: 50px;
      @include pc {
        width: 80px;
      }
    }
  }
  &__nav {
    display: flex;
    flex-wrap: wrap;
    margin-left: -6px;
    margin-right: -6px;
    > li {
      width: 50%;
      height: 130px;
      padding: 6px;
      @include pc {
        height: 250px;
      }
      &.low {
        height: 80px;
        @include pc {
          height: 130px;
        }
      }
      &.wide {
        width: 230 / 330 * 100%;
        .gMenu-btn {
          flex-direction: row;
          .icon {
            width: 44px;
            margin-right: 0.5em;
            @include pc {
              width: 68px;
            }
          }
        }
      }
      &.narrow {
        width: 100% - (230 / 330 * 100%);
        .gMenu-btn {
          .icon {
            width: 28px;
            @include pc {
              width: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
