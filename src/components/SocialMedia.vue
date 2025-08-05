<script setup>
defineProps({
    text: String
})

import { ref } from 'vue';
import { sosmedContent } from '@/constant/globalConst';

const sosmed = ref(sosmedContent)

</script>

<template>
    <ul class="text-xl mt-4 lg:mt-8 flex flex-row gap-2 items-center" id="sosmed-index">
        <li v-for="(e, i) in sosmed" class="sosmed-link">
            <a :href="e.link" :key="i" class="sosmed-link-url dark-mode-transition"><i :class="e.icon"></i></a>
        </li>
        <li class="w-[1px] px-[1px] h-[1.05rem] mx-1 bg-black sosmed-link dark:bg-back-200 dark-mode-transition"></li>
        <li
            class="text-sm font-light tracking-wider font-mono sosmed-link text-zinc-700 dark:text-back-200 dark-mode-transition">
            {{ text }}</li>
    </ul>
</template>