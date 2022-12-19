<template>
  <div class="c-top-sheet" :class="{ search: mode === 'search' }">
    <div class="container">
      <CButton @button="changeTopSheetMode('hide')">
        <svg width="24px" height="24px">
          <use xlink:href="#close"></use>
        </svg>
      </CButton>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CButton from "./CButton.vue";
export default {
  components: { CButton },
  props: {
    mode: {
      type: String,
      required: true,
    },
    changeTopSheetMode: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.c-top-sheet {
  background-color: #fff;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  box-shadow: 0 5px 5px -5px rgba($dark, 0.5);

  opacity: 0;
  transform: translate3d(0, -10%, 0);
  transition: all 0.3s;

  z-index: 2;
  padding-top: 60px;

  .container {
    padding: 60px 16px;
    display: flex;
    justify-content: center;
    position: relative;
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  &.open {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  @media (max-width: 768px) {
    padding-top: 16px;

    .container {
      padding: 16px;
    }
  }
}
</style>
