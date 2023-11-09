<script setup lang="ts">
useHead({
  title: "Hello World",
  meta: [
    {
      name: "description",
      content: "Hello World"
    }
  ]
})
const { data } = useFetch < {
  text: string
} > ("/api/hello")
</script>

<template>
  <div>
    {{ data?.text }}
  </div>
</template>
