<template>
  <div
    class="flex flex-col justify-around h-screen"
    style="
      background-image: url('https://blogger.googleusercontent.com/img/a/AVvXsEhDbpjz69R7Bbc1wbAMZucgWeaEK6c1n44Lz_Yu59u2LEe_irRyT8x_kuJ8UY21gautJnkmFkfrsE7FCwbm3lSHvB0XhTJ-yT9u68EOZOHSMOss-OncjNccK2VA6LFhIxxWsTLF8iyhn85GzKu8F1XPCOZBmj_qlC_4LJHrDoiGvfAI7pWtS76y2eBB3A');
      background-position: center;
      background-size: cover;
    "
  >
    <div
      class="flex p-8 mx-auto text-5xl text-black font-licorice md:text-white"
    >
      Bandung Pedas
    </div>
    <div>
      <div
        v-for="(item, index) of linkItem"
        :key="index"
        class="flex justify-center my-auto"
      >
        <a
          :href="item.href"
          :target="item.targetBlank"
          rel="noopener noreferrer"
        >
          <button
            :class="'hover:shadow-' + item.color + '-500 text-' + item.color + '-500'
            "
            class="p-4 my-4 font-bold duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105"
          >
            {{ item.label }}
          </button>
        </a>
      </div>
    </div>
    <div class="text-center">
      <div class="text-black md:text-white">
        Copyright &copy; {{ new Date().getFullYear() }}
        <NuxtLink to="/" class="font-medium text-green-500"
          >Bandung <span class="text-red-500">Ped</span
          ><span class="text-orange-500">as</span></NuxtLink
        >
        All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkItem: [
        {
          label: "Official Sites",
          href: "/home",
          color: "red",
          targetBlank: "_self",
        },
        {
          label: "Tokopedia",
          href: "#",
          color: "green",
          targetBlank: "_blank",
        },
        {
          label: "Shopee",
          href: "#",
          color: "orange",
          targetBlank: "_blank",
        },
        {
          label: "Instagram",
          href: "#",
          color: "red",
          targetBlank: "_blank",
        },
      ],
      showMenu: false,
      showMenu2: false,
    };
  },
};
</script>
