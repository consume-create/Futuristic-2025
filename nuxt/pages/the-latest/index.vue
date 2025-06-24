<template>
  <div class="page">
    <Placeholder
      title="The Latest Hero / Filters"
    />
    <Placeholder
      :fullscreen="true"
      :sticky="true"
      title="Grid Layout / Scroll FX"
      :cta="{
        path: '/the-latest/example',
        label: 'View Example Post from “The Latest”'
      }"
    />
    <Footer />
  </div>
</template>
