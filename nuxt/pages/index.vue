<template>
  <div class="page">
    <Placeholder
      :invert="true"
      :fullscreen="true"
      title="Home Hero / Reel"
    />
    <Placeholder
      :fullscreen="true"
      :sticky="true"
      title="Featured Projects / Scroll FX"
      :cta="{
        path: '/work/example',
        label: 'View Example Work Detail Page'
      }"
    />
    <Placeholder
      title="The Latest / Carousel"
    />
    <Footer />
  </div>
</template>
