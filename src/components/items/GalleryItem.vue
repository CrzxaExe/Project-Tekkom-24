<script setup>
defineProps({
    title: String,
    description: String,
    type: String,
    images: { type: Array, default: [] },
    author: Object,
})
</script>

<template>
        <li class="aspect-[3.4/4] w-full cursor-pointer transition-all transition-normal duration-300 ease-in-out">
            <div class="w-full object-cover object-center min-h-fit aspect-square overflow-hidden rounded-lg">
                <img :src="images[0]" :alt="title" v-if="images[0]">
                <div class="w-full min-h-[100%] bg-zinc-200 dark:bg-back-800" v-else />
            </div>
            <p class="mt-1 text-xs lg:text-sm">{{ title }}</p>
        </li>
</template>