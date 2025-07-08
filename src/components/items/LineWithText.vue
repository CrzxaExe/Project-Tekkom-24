<script setup>
defineProps({
    text: String
})
</script>

<template>
    <div class="w-full flex flex-row gap-2 lg:gap-3 medium-only items-center px-2 lg:px-4 mt-2 pb-2">
        <span class="w-full h-[1px] bg-back-200 dark:bg-back-700" />
        <h4 class="text-back-200 dark:text-back-700 text-xs lg:text-sm">{{ text }}</h4>
    </div>
</template>