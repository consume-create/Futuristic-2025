<template>
  <NuxtLayout>
    <div class="page error-page">
      <section>
        <div class="gutter">
          <h2>Error 404!</h2>
          <p>The page you requested doesn’t exist.</p>
          <NuxtLink to="/">Go Home</NuxtLink>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
</script>

<style lang='scss'>
.error-page {
  h2 {
    margin: 1em 0 0.5em;
  }

  a {
    font-size: 14px;
    margin-top: 0.5em;
    text-decoration: underline;
  }
}

</style>
