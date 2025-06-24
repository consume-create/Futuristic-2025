<template>
  <div class="page">
    <Placeholder
      title="Creative Person’s Info / Two Column"
    />
    <Placeholder
      :fullscreen="true"
      :sticky="true"
      title="Creative Person’s Project Grid / Scroll FX"
    />
    <Footer />
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
