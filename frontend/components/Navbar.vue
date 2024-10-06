<template>

  <div class="bg-white shadow text-lg px-6 py-6">
    <div class="container mx-auto flex justify-between items-center">
      <nuxt-link to="/" class="font-bold text-xl">Laravel Vue SPA</nuxt-link>
      <div>
        <nuxt-link to="/" class="mr-4">Home</nuxt-link>
        <nuxt-link to="/about" class="mr-4">About</nuxt-link>
        <nuxt-link to="/contact" class="mr-4">Contact</nuxt-link>
        <nuxt-link to="/posts" class="mr-4">Posts</nuxt-link>
        
      </div>
    </div>
  </div>
  
</template>


<style>
.router-link-active{
  color: red;
}
</style>