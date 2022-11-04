<template>
  <div class="fixed z-10 flex justify-center w-full bg-white shadow-md">
    <div class="flex items-center justify-between w-full py-2 mx-auto md:w-3/4">
      <div
        class="flex items-center justify-between w-full px-4 md:w-fit md:px-0"
      >
        <NuxtLink to="/" class="text-xl">BDGPDS</NuxtLink>
        <button class="md:hidden hover:bg-gray-50" @click="open = !open">
          <AtomsIconsMenu />
        </button>
      </div>

      <!-- Drawer -->
      <div
        :class="open ? 'translate-x-0' : '-translate-x-full'"
        class="fixed top-0 flex flex-col w-screen h-screen gap-8 p-4 duration-300 ease-in-out bg-white md:hidden"
      >
        <div class="relative flex justify-between">
          <div class="text-xl">Bandung Pedas</div>
          <button @click="open = !open" class="absolute top-0 right-4">
            <AtomsIconsClose />
          </button>
        </div>
        <div class="flex flex-col gap-2 font-light">
          <div @click="open = !open">
            <NuxtLink @click="open = !open" to="/home">Home</NuxtLink>
          </div>
          <div class="relative flex cursor-pointer" @click="show1 = !show1">
            <div>Product</div>
            <div v-if="show1"><AtomsIconsChevronDown /></div>
            <div v-if="!show1"><AtomsIconsChevronRight /></div>
          </div>
          <div :class="show1 ? '' : 'hidden'" class="flex flex-col">
            <div @click="open = !open">
              <NuxtLink to="/categories/basreng">Basreng</NuxtLink>
            </div>
            <div @click="open = !open">
              <NuxtLink to="/categories/emping">Emping</NuxtLink>
            </div>
            <div @click="open = !open">
              <NuxtLink to="/categories/gurilem">Gurilem</NuxtLink>
            </div>
            <div @click="open = !open">
              <NuxtLink to="/categories/keripikkentang"
                >Keripik Kentang</NuxtLink
              >
            </div>
            <div @click="open = !open">
              <NuxtLink to="/categories/keripiksingkong"
                >Keripik Singkong</NuxtLink
              >
            </div>
            <div @click="open = !open">
              <NuxtLink to="/categories/lidi">Lidi</NuxtLink>
            </div>
            <div @click="open = !open">
              <NuxtLink to="/products">All Products</NuxtLink>
            </div>
          </div>
          <div class="relative flex cursor-pointer" @click="show2 = !show2">
            <div>Where to Buy</div>
            <div v-if="show2"><AtomsIconsChevronDown /></div>
            <div v-if="!show2"><AtomsIconsChevronRight /></div>
          </div>
          <div :class="show2 ? '' : 'hidden'" class="flex flex-col">
            <div @click="open = !open">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >Instagram</a
              >
            </div>
            <div @click="open = !open">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >Shopee</a
              >
            </div>
            <div @click="open = !open">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >Tokopedia</a
              >
            </div>
          </div>
          <div @click="open = !open">
            <NuxtLink to="/about">About Us</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Main Nav -->
      <div class="items-center hidden gap-8 duration-300 ease-in-out md:flex">
        <NuxtLink
          to="/home"
          class="px-4 py-2 duration-300 ease-in-out rounded-md hover:bg-gray-50"
        >
          Home
        </NuxtLink>
        <div class="dropdown dropdown-hover">
          <button tabindex="0" class="px-4 py-2 rounded-md hover:bg-gray-50">
            Product
          </button>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-fit"
          >
            <li>
              <NuxtLink to="/categories/basreng" class="hover:bg-gray-50"
                >Basreng</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/categories/emping" class="hover:bg-gray-50"
                >Emping</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/categories/gurilem" class="hover:bg-gray-50"
                >Gurilem</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/categories/keripikkentang" class="hover:bg-gray-50"
                >Keripik Kentang</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/categories/keripiksingkong"
                class="hover:bg-gray-50"
                >Keripik Singkong</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/categories/lidi" class="hover:bg-gray-50"
                >Lidi</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/products" class="hover:bg-gray-50"
                >All Products</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="dropdown dropdown-hover">
          <button tabindex="0" class="px-4 py-2 rounded-md hover:bg-gray-50">
            Where to Buy
          </button>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-fit"
          >
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >Instagram</a
              >
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >Shopee</a
              >
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                el="noopener noreferrer"
                >Tokopedia</a
              >
            </li>
          </ul>
        </div>
        <NuxtLink to="/about" class="px-4 py-2 rounded-md hover:bg-gray-50"
          >About Us</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      show1: false,
      show2: false,
    };
  },
};
</script>
