<template>
  <div class="app">
    <CHeader ref="headerRef" />
    <router-view />
  </div>
</template>

<script>
import CHeader from "@/sections/SHeader.vue";
import { useObserver } from "@/composables/useObserver.js";
import { onMounted, ref } from "vue";

export default {
  components: { CHeader },

  setup() {
    const headerRef = ref();

    onMounted(() => {
      useObserver(headerRef.value.$el, (el) => {
        el.target.classList.add("animated");
      });
    });

    return {
      headerRef,
    };
  },
};
</script>

<style></style>
