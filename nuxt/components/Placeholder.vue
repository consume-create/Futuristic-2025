<template>
  <section class="placeholder" :class="{ '--invert': invert, '--fullscreen': fullscreen, '--sticky': sticky }">
    <div class="inner">
      <p><strong>{{ title }}</strong></p>
      <NuxtLink v-if="cta" :to="cta.path">
        <p>{{ cta.label }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
// Props
const props = defineProps({
  invert: {
    type: Boolean,
    required: false
  },
  fullscreen: {
    type: Boolean,
    required: false
  },
  sticky: {
    type: Boolean,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  cta: {
    type: Object,
    required: false
  }
});
</script>

<style lang='scss'>
.placeholder {
  position: relative;
  width: 100%;
  border-bottom: 1px solid $black;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    border-bottom: none;
  }

  &.--invert {
    color: $white;
    background-color: $black;
    border-bottom: none;
  }

  &.--fullscreen {
    .inner {
      padding: 0;
      height: 100vh;
    }

    &:nth-of-type(1) {
      .inner {
        height: calc(100vh - 60px);
      }
    }
  }

  &.--sticky {
    height: 200vh;

    .inner {
      position: sticky;
      top: 0;
      height: 100vh;
    }
  }

  .inner {
    position: relative;
    padding: span(2) span(1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      margin-top: 0.5em;
      font-size: 14px;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
}

</style>
