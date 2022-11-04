<template>
  <div class="mx-auto">
    <VueSlickCarousel v-bind="slickOptions" v-viewer="{ toolbar: false }">
      <nuxt-img
        v-for="(item, index) of images"
        :key="index"
        :src="item"
        class="w-full cursor-pointer rounded-box"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    };
  },
  props: ["images"],
};
</script>
