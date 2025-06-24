<template>
  <div class="page">
    <Placeholder
      title="Creatives Hero / Title"
    />
    <Placeholder
      :fullscreen="true"
      :sticky="true"
      title="List of Creatives / Scroll FX"
      :cta="{
        path: '/creatives/example',
        label: 'View Creative Person’s Example Detail Page'
      }"
    />
    <Footer />
  </div>
</template>
