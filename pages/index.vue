<template>
  <div>
    <OrganismsLinktree />
  </div>
</template>

<script>
export default {
  name: "Index",
  layout: "linktree",
  head({ $seo }) {
    return $seo({
      title: "Portal",
    });
  },
};
</script>
