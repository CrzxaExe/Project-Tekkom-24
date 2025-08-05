<script setup>
defineProps({
    icon: String,
    name: String,
    description: String,
})
</script>

<template>
    <div class="bg-zinc-400/0 w-full flex flex-col gap-2 px-3 py-2">
        <div class="flex flex-col gap-2 lg:gap-4">
            <i :class="icon" class="text-[2.5rem] dark-mode-transition hover:text-accent-700 inline"></i>
            <h1 class="font-primary text-xl lg:text-2xl dark-mode-transition">{{ name }}</h1>
        </div>
        <p class="font-extralight whitespace-pre-line dark-mode-transition">
            {{ description }}
        </p>
    </div>
</template>