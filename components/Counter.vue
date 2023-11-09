<script setup lang="ts">
const { count, inc } = useCounter(1)
</script>

<template>
    <button class="bg-gray-300 rounded-xl p-3 text-lg" @click="inc">
        Count: {{ count }}
    </button>
</template>
