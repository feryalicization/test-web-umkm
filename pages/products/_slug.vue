<template>
  <div class="w-3/4 grid-cols-2 gap-8 mx-auto my-0 md:grid md:my-8">
    <div>
      <MoleculesCarousel :images="doc['image']" />
    </div>
    <div class="flex flex-col gap-4 pt-8 md:pt-0">
      <div class="text-2xl font-medium">{{ doc["title"] }}</div>
      <div><strong>Berat: </strong>{{ doc["heavy"] }}</div>
      <div>
        <strong>Harga: </strong
        >{{
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(doc["price"])
        }}
      </div>
      <div>
        <strong>Kategori:</strong>
        <NuxtLink
          :to="{
            path: `/categories/${doc['category']
              .toLowerCase()
              .replace(/ /g, '')
              .replace(/[^\w-]+/g, '')}`,
          }"
        >
          {{ doc["category"] }}
        </NuxtLink>
      </div>
      <div><strong>Rasa: </strong>{{ doc["flavour"] }}</div>
      <div class="dropdown">
        <div
          tabindex="0"
          class="px-4 py-2 text-white bg-orange-500 cursor-pointer w-fit rounded-box"
        >
          Order Now
        </div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a
              :href="
                '#' + doc['tokopedia']
              "
              target="_blank"
              rel="noopener noreferrer"
              >Tokopedia</a
            >
          </li>
          <li>
            <a
              :href="'#' + doc['shopee']"
              target="_blank"
              rel="noopener noreferrer"
              >Shopee</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("products", params.slug).fetch();
    return { doc };
  },
  head({ $seo }) {
    let productName = this.doc["title"];
    return $seo({
      title: productName,
    });
  },
};
</script>
