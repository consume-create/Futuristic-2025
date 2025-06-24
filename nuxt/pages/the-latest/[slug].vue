<template>
  <div class="page">
    <Placeholder
      title="The Latest Hero / Two Column"
    />
    <Placeholder
      title="Page Builder (i.e. Three Columns)"
    />
    <Placeholder
      title="Page Builder (i.e. Text Block)"
    />
    <Placeholder
      title="Page Builder (i.e. Media Grid)"
    />
    <Placeholder
      title="Page Builder (i.e. Text Block)"
    />
    <Placeholder
      title="Page Builder (i.e. Single Video)"
    />
    <Placeholder
      title="Page Builder (i.e. Three Columns)"
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
