<template>
  <div class="s-blog container">
    <h3 ref="sectionTitleRef">Наш блог</h3>

    <div class="s-blog__content">
      <ul>
        <li
          v-for="(item, idx) in data.items"
          :key="item.id"
          ref="blogRef"
          :style="{ 'transition-delay': `0.${idx + 2}s` }"
        >
          <div class="wrapper"></div>
          <div class="s-blog__img">
            <img :src="item.img" />
          </div>
          <p :style="{ 'transition-delay': `0.${idx + 2}s` }">
            {{ item.title }}
          </p>
          <p :style="{ 'transition-delay': `0.${idx + 4}s` }">
            {{ item.text }}
          </p>

          <CButton
            :style="{ 'transition-delay': `0.${idx + 5}s` }"
            name="Читать полностью"
            to=""
          />
        </li>
      </ul>
      <router-link to="" class="s-blog__all" ref="linkRef">
        <span>Перейти ко всем записям блога</span>
        <svg width="24px" height="24px">
          <use xlink:href="#arrow-right"></use>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useObserver } from "@/composables/useObserver.js";
import { onMounted, ref } from "vue";
import CButton from "../components/CButtonLink.vue";
const data = {
  items: [
    {
      id: 1,
      img: "blog-1.jpg",
      title:
        "Система развивающего обучения не для особенных детей, она – для всех",
      text: "Лучшие образцы развивающих учебников для начальной школы образовательных систем Д.Б. Эльконина–В.В. Давыдова, «Гармонии», «Учусь учиться» возвращаются в школы.",
      date: "12 июля",
    },
    {
      id: 2,
      img: "blog-2.jpg",
      title: "Услышать друг друга – большое искусство",
      text: "Если вдуматься, то мы всю жизнь делаем интервью, разговаривая с разными людьми, и к профессии журналиста это не имеет никакого отношения. ",
      date: "2 июля",
    },
  ],
};

export default {
  components: { CButton },
  setup() {
    const blogRef = ref([]);
    const linkRef = ref();
    const sectionTitleRef = ref();

    onMounted(() => {
      setTimeout(() => {
        useObserver(sectionTitleRef.value, (el) => {
          el.target.classList.add("animated");
        });

        blogRef.value.forEach((v) => {
          useObserver(v, (el) => {
            el.target.classList.add("animated");
          });
        });

        useObserver(linkRef.value.$el, (el) => {
          el.target.classList.add("animated");
        });
      }, 500);
    });

    return {
      sectionTitleRef,
      linkRef,
      blogRef,
      data,
    };
  },
};
</script>

<style lang="scss">
.s-blog {
  padding: 80px;

  @media (max-width: 1199px) {
    padding: 16px;
  }

  h3 {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
    transition: all 0.2s ease-out;
    text-align: center;
    margin-bottom: 45px;
  }

  &__content {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    grid-gap: 20px;

    @media (max-width: 1199px) {
      grid-template-columns: max-content;
      grid-template-rows: 1fr 100px;
      row-gap: 40px;
    }
  }

  &__go {
    margin-top: auto;
    margin-left: auto;
  }

  ul {
    display: grid;
    grid-template-columns: 360px 360px;
    grid-template-rows: 1fr;
    grid-gap: 20px;

    @include reset-list;

    @media (max-width: 768px) {
      grid-template-columns: 360px;
      row-gap: 40px;
      grid-template-rows: 1fr 1fr;
    }
  }

  &__all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    background: rgba($second-accent, 0.9);
    // margin: 16px;
    box-sizing: border-box;
    overflow: hidden;
    text-decoration: none;
    // background-image: url("blog-3.png");
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    position: relative;
    text-align: center;
    border-radius: 12px;

    opacity: 0;
    transform: translate3d(0, -10%, 0);
    transition: all 0.5s ease-out;
    transition-delay: 0.6s;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: $second-accent;
      transform: translate3d(0, 0, 0);
      transition: transform 0.2s;
    }

    span {
      color: $dark;
      margin-bottom: 16px;
    }

    svg {
      stroke: $dark;
    }

    span,
    svg {
      position: relative;
      z-index: 2;
      transition: all 0.2s;
    }

    &:hover::before {
      transform: translate3d(100%, 0, 0);
    }

    &:hover {
      span {
        color: #fff;
      }

      svg {
        stroke: #fff;
      }
    }

    @media (max-width: 1199px) {
      width: 100%;
      transition-delay: 0.4s;
    }
  }

  &__img {
    height: 210px;
    width: 330px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  li {
    flex-shrink: 0;
    position: relative;
    padding: 16px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    // overflow: hidden;

    opacity: 0;
    transform: translate3d(0, -10%, 0);
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    transition-delay: 0s;

    p {
      padding: 0 16px;
      opacity: 0;
      transform: translate3d(-10%, 0, 0);
      transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    }

    p:first-of-type {
      position: relative;

      font-weight: 800;
      font-size: 18px;
      line-height: 125%;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: $accent;
        width: 2px;
      }
    }

    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 0;
      background-color: $middle-dark;
      left: 0;
      transition: transform 0.2s;
    }

    &::before {
      height: 1px;
      width: 100%;
      transform-origin: left;
      transform: scaleX(0.3);
    }

    &::after {
      width: 1px;
      height: 100%;
      transform-origin: top;
      transform: scaleY(0.3);
    }

    .wrapper {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;

      &::after,
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        background-color: $middle-dark;
        right: 0;

        transition: transform 0.2s;
      }

      &::before {
        height: 1px;
        width: 100%;
        transform-origin: right;
        transform: scaleX(0.3);
      }

      &::after {
        width: 1px;
        height: 100%;
        transform-origin: bottom;
        transform: scaleY(0.3);
      }
    }

    &:hover {
      &::before {
        transform: scaleX(1);
      }

      &::after {
        transform: scaleY(1);
      }

      .wrapper {
        &::before {
          transform: scaleX(1);
        }

        &::after {
          transform: scaleY(1);
        }
      }
    }

    @media (max-width: 768px) {
      transform: translate3d(0, -10%, 0);
    }
  }
}

.s-blog {
  .s-blog__all.animated,
  li.animated,
  li.animated p,
  h3.animated {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
