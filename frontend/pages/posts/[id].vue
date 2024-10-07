<template>
  <div class="mt-10">
    <Title>{{ post.title }} | {{ title }}</Title>
    <div class="bg-white shadow-md rounded p-4">
      <h2 class="text-xl font-bold">{{ post.title }}</h2>
      <p class="text-gray-700">{{ post.body }}</p>
      <p>{{ post.created_at }}</p>
      <p>{{ post.user.name }}</p>
    </div>
  </div>
</template>

<script setup>


const title = useState('title', () => 'Default Title')
const route = useRoute()

const { data: post } = await useFetch(`http://localhost:8000/api/posts/${route.params.id}`)
</script>