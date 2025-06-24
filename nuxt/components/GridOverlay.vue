<template>
  <div id="grid-overlay" v-if="enabled">
    <div
      class="grid-line"
      v-for="i in 15"
      :key="i"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const enabled = ref(null);

// Mounted
onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

// Before Unmount
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
});

// Methods
function onKeydown(e) {
  if (e.key === 'g') {
    enabled.value = !enabled.value;
  }
};
</script>

<style lang='scss'>
#grid-overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  width: span(14);
  height: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 3000;

  .grid-line {
    width: 1px;
    height: 100%;
    background-color: rgba(#3333ff, 18%);

    &:first-child,
    &:last-child {
      opacity: 0;
    }
  }
}
</style>
