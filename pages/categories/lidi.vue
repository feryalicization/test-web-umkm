<template>
  <div class="md:py-8">
    <div class="flex flex-col w-[90%] gap-4 mx-auto md:w-3/4">
      <div
        class="px-4 py-2 text-xl font-bold text-center border shadow-md rounded-box md:text-center"
      >
        Lidi
      </div>
      <div v-for="(item, index) of doc" :key="index">
        <NuxtLink
          :to="{ path: `/products/${item['slug']}` }"
          class="flex flex-col justify-between border shadow-md md:flex-row rounded-box"
        >
          <div class="flex flex-col gap-4 md:flex-row">
            <div>
              <img
                :src="item['thumbnail']"
                :alt="item['title']"
                class="w-full md:w-64 rounded-box"
              />
            </div>
            <div class="flex flex-col justify-center px-4 py-4 md:px-0">
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
          <div class="flex items-center justify-center p-4">
            <NuxtLink :to="{ path: `/products/${item['slug']}` }">
              <div
                class="px-4 py-2 text-white bg-green-500 cursor-pointer rounded-box"
              >
                Detail Product
              </div></NuxtLink
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("products", params.slug)
      .where({ category: "Lidi" })
      .fetch();
    return { doc };
  },
  head({ $seo }) {
    return $seo({
      title: "Lidi",
    });
  },
};
</script>
