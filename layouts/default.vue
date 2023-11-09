<script setup lang="ts">
useHead({
  title: "Hello World",
  meta: [
    {
      name: "description",
      content: "Hello World",
    },
  ],
});
</script>

<template>
  <main class="container mx-auto flex min-h-screen justify-center items-center w-full">
    <slot />
  </main>
</template>
