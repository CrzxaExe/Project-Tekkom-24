<script setup>
defineProps({
    text: String
})

import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
import { sosmedContent } from '@/constant/globalConst';

const sosmed = ref(sosmedContent)

onMounted(() => {
    gsap.from("#sosmed-index", {
        y: 30,
        duration: 0.3,
        delay: 0.32,
    })
    gsap.from(".sosmed-link", {
        x: 50,
        opacity: 0,
        duration: 0.3,
        delay: 0.42,
        stagger: 0.06
    })
})
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