<template>
  <div class="w-[90%] md:w-3/4 mx-auto flex flex-col gap-4">
    <div v-for="(item, index) of doc" :key="index">
      <NuxtLink
        :to="{ path: `/products/${item['slug']}` }"
        class="flex flex-col justify-between pb-4 border shadow-md md:flex-row rounded-box md:pb-0"
      >
        <div class="flex flex-col md:flex-row">
          <div>
            <img
              :src="item['thumbnail']"
              :alt="item['title']"
              class="w-full rounded-box md:w-64"
            />
          </div>
          <div class="flex flex-col justify-center p-4">
            <div>
              <strong>{{ item["title"] }}</strong>
            </div>
            <div><strong>Berat: </strong>{{ item["heavy"] }}</div>
            <div>
              <strong>Harga:</strong>
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(item["price"])
              }}
            </div>
            <div><strong>Rasa:</strong> {{ item["flavour"] }}</div>
          </div>
        </div>
        <div class="flex items-center justify-center p-0 md:p-4">
          <NuxtLink :to="{ path: `/products/${item['slug']}` }">
            <div class="px-4 py-2 text-white bg-green-500 rounded-box">
              Detail Product
            </div>
          </NuxtLink>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content("products").sortBy("createdAt", "desc").fetch();
    return { doc };
  },
  head({ $seo }) {
    return $seo({
      title: "All Products",
    });
  },
};
</script>
