<script setup lang="ts">
definePageMeta({
    middleware: [
        function (to, from) {
            // Custom inline middleware
        },
        'auth',
    ],
});
</script>

<template>
    <div class="flex flex-col gap-5">
        <h1>Auth page</h1>
        <p>open terminal and see the results</p>
    </div>
</template>
