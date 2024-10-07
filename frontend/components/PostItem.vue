<template>
  <div class="bg-white shadow-md rounded p-4">
    <h2 class="text-xl font-bold">{{ props.post.title }}</h2>
    <p class="text-gray-700">{{ props.post.body }}</p>
    <p>{{ props.post.create_at }}</p>
    <p>{{ props.post.user.name }}</p>
    <nuxt-link :to="`/posts/${props.post.id}`" class="text-blue-500">Read More</nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})
</script>