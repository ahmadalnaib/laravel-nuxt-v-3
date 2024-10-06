<template>
  <div class="bg-gray-100 min-h-screen text-gray-900">
    <Title>{{ title }}</Title>
    <Navbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
const title = useState('title',()=>'Laravel Vue SPA');
</script>
