<template>
  <div class="c-button-link">
    <router-link to="">{{ name }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.c-button-link {
  position: relative;
  background-color: $accent;
  white-space: nowrap;
  margin-top: auto;
  margin-left: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0;
  transform: translate3d(0, 20%, 0);
  animation: slideFromBottom 0.2s ease-out forwards;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate3d(-100%, 0, 0);
    transition: transform 0.1s;
    background-color: rgba(#4fbfed, 1);
  }

  a {
    text-decoration: none;
    color: #fff;
    padding: 8px 16px;
    z-index: 2;
    position: relative;
  }

  &:hover::before {
    transform: translate3d(0, 0, 0);
  }
}
</style>
