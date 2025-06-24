<template>
  <NuxtLayout>
    <div class="page error-page">
      <section>
        <div class="gutter">
          <h2>Error 404!</h2>
          <p>The page you requested doesn’t exist.</p>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
</script>
