<template>
  <div>
    <LazyOrganismsHero />
    <LazyOrganismsNewProducts :newProduct="newProduct" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const newProduct = await $content("products")
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();
    return { newProduct };
  },
  head({ $seo }) {
    return $seo({
      title: "Home",
    });
  },
};
</script>
