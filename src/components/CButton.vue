<template>
  <button type="button" class="c-button" @click="$emit('button')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ["button"],
};
</script>

<style lang="scss">
.c-button {
  background-color: transparent;
  border: 1px solid $dark;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;

  transition: all 0.1s;

  svg {
    stroke: $dark;
  }

  &:hover {
    border-color: $second-accent;

    svg {
      stroke: $second-accent;
    }
  }
}
</style>
