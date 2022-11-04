<template>
  <div class="flex flex-col w-3/4 gap-4 mx-auto">
    <div class="flex items-center justify-center text-3xl font-light">
      New Products
    </div>
    <!-- <div class="p-4 space-x-4 border carousel carousel-center rounded-box">
      <div
        class="carousel-item"
        v-for="(item, index) of newProduct"
        :key="index"
      >
        <NuxtLink :to="{ path: item['path'] }" class="flex flex-col gap-2">
          <nuxt-img :src="item['thumbnail']" class="w-64 rounded-box" />
          <div class="font-medium">{{ item["title"] }}</div>
        </NuxtLink>
      </div>
    </div> -->
    <div class="pb-8">
      <VueSlickCarousel v-bind="slickOptions">
        <div v-for="(item, index) of newProduct" :key="index">
          <NuxtLink
            :to="{ path: item['path'] }"
            class="flex flex-col gap-2 mx-4"
          >
            <nuxt-img :src="item['thumbnail']" class="w-64 rounded-box" />
            <div class="font-medium">{{ item["title"] }}</div>
          </NuxtLink>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="flex justify-end">
      <NuxtLink to="/products" class="text-lg font-light"
        >All Products</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        accessibility: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  props: ["newProduct"],
};
</script>
