<template>
  <div>
    <template>
  <div class="bg-white shadow-md rounded p-4">
    <h2 class="text-xl font-bold">Post Title</h2>
    <p class="text-gray-700">Post Body</p>
    <nuxt-link :to="`/posts/1`" class="text-blue-500">Read More</nuxt-link>
  </div>
</template>

      {{ $route.params.id }}
 
  </div>
</template>