<template>
  <div class="page">
    <template v-if="pageData">
      <h1>Dynamic Page - {{ data.title }}</h1>
    </template>
  </div>
</template>

<script setup>
const route = useRoute();
const params = { slug: route.params.slug };
// const query = groq`*[_type == 'post' && slug.current == $slug][0]
//   {
//     title,
//     slug
//   }
// }`;
// const { data, refresh } = useSanityQuery(query);

</script>
