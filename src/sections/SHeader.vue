<template>
  <header class="c-header">
    <div class="c-header__top container">
      <div class="c-header__logo">
        <img src="logo.png" width="136" height="102" alt="логотип eurekakid" />
        <div>
          <p>eurekakid</p>
          <p>навигатор для родителей</p>
        </div>
      </div>

      <ul>
        <li
          v-for="item in navigation"
          :key="item.id"
          :class="{ active: compareRoute(item.link) }"
        >
          <router-link :to="item.link">{{ item.title }}</router-link>
        </li>
      </ul>

      <div class="c-header__btns">
        <CButton :style="{ 'animation-delay': '0.3s' }">
          <svg width="24px" height="24px">
            <use xlink:href="#account"></use>
          </svg>
        </CButton>
        <CButton :style="{ 'animation-delay': '0.5s' }">
          <svg width="24px" height="24px">
            <use xlink:href="#menu"></use>
          </svg>
        </CButton>

        <CButton
          @button="changeTopSheetMode('search')"
          :style="{ 'animation-delay': '0.7s' }"
        >
          <svg width="24px" height="24px">
            <use xlink:href="#search"></use>
          </svg>
        </CButton>
      </div>
    </div>

    <CTopSheet
      :class="{ open: topSheetMode !== 'hide' }"
      :mode="topSheetMode"
      :changeTopSheetMode="changeTopSheetMode"
    >
      <div class="c-header__search">
        <input type="text" placeholder="Что ищем?" />
        <CButtonLink name="искать" to="" />
      </div>
    </CTopSheet>

    <!-- <CTopSheet></CTopSheet> -->
  </header>
</template>

<script>
// import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import CButton from "@/components/CButton.vue";
import CTopSheet from "@/components/CTopSheet.vue";
import { ref } from "vue";
import CButtonLink from "../components/CButtonLink.vue";

const navigation = [
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "Программы", link: "/programms" },
  { id: 3, title: "Маркет", link: "/market" },
  { id: 4, title: "Скорая помощь", link: "/help" },
  { id: 5, title: "События", link: "/events" },
];
export default {
  components: { CButton, CTopSheet, CButtonLink },
  setup() {
    const route = useRoute();
    const topSheetMode = ref("hide");

    function compareRoute(link) {
      let r;
      if (route.path === "/") {
        r = link === route.path;
      } else {
        r = link.includes(route.path);
      }

      return r;
    }

    function changeTopSheetMode(mode) {
      topSheetMode.value = mode;
    }

    return {
      changeTopSheetMode,
      topSheetMode,
      compareRoute,
      navigation,
    };
  },
};
</script>

<style lang="scss">
.c-header {
  position: relative;
  background-color: #fff;
  z-index: 3;

  &__search {
    display: flex;
    width: 100%;
    justify-content: center;

    input {
      width: 100%;
      max-width: 80%;
      border-radius: 8px;
      border: 2px solid $accent;
      box-sizing: border-box;
      padding: 0 8px;
      font-weight: 700;

      &:focus {
        outline: none;
      }
    }

    .c-button-link {
      margin-left: 8px;
    }
  }

  &__top {
    padding: 16px;
    padding-bottom: 0;
    background-color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 4;

    @media (max-width: 768px) {
      padding: 8px;
      padding-bottom: 16px;
    }
  }

  &__logo {
    display: flex;

    opacity: 0;
    transform: translate3d(-20%, 0, 0);
    transition: all 0.2s cubic-bezier(0.5, 1, 0.89, 1);

    p {
      white-space: nowrap;
    }

    @media (max-width: 1199px) {
      p {
        display: none;
      }
    }

    @media (max-width: 768px) {
      img {
        width: 96px;
        height: 72px;
      }
    }
  }

  ul {
    @include reset-list;
    display: flex;
    flex-wrap: wrap;
    margin: 0 16px;
    opacity: 0;
    transform: translate3d(0, -20%, 0);
    transition: all 0.2s cubic-bezier(0.5, 1, 0.89, 1) 0.2s;

    @media (max-width: 768px) {
      display: none;
    }
  }

  li {
    margin: 8px;

    a {
      padding: 8px;
      text-decoration: none;
      color: $dark;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      white-space: nowrap;

      transition: all 0.2s;
    }

    &.active a {
      color: $accent;
    }

    &:hover a {
      color: $second-accent;
    }
  }

  &__btn {
    padding: 8px;
    text-decoration: none;
  }

  &__btns {
    display: flex;

    button + button {
      margin-left: 8px;
    }

    button {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
  }
}

.animated {
  ul,
  .c-header__logo {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .c-header__btns button {
    animation: slideFromTop100 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1 forwards;
  }
}
</style>
