<template>
  <div class="min-h-screen hero md:px-32">
    <div class="flex-col gap-8 hero-content lg:flex-row-reverse">
      <nuxt-img
        src="/product/keripikkentangrasapedas/keripikkentangrasapedas0.jpg"
        class="w-full max-w-sm rounded-lg shadow-2xl mask mask-squircle"
      />
      <div class="flex flex-col justify-center w-full md:justify-start">
        <h1
          class="mb-5 text-2xl font-thin text-center md:text-5xl md:text-left"
        >
          Keripik Kentang Rasa Pedas
        </h1>
        <div class="flex justify-center gap-4 md:justify-start">
          <NuxtLink to="/products/keripikkentangrasapedas"
            ><button class="btn btn-warning">Order Now</button></NuxtLink
          >
          <NuxtLink to="/products/keripikkentangrasapedas"
            ><button class="btn btn-primary">Detail Product</button></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>
