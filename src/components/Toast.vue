<script setup>
defineProps({
    title: { type: String },
    icon: { type: String },
    desc: { type: String }
})

import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
    gsap.from("#toast", {
        x: 400,
        opacity: 0,
        duration: 0.6,
        ease: "expo.out",
        delay: 0.3,
    })
})
</script>

<template>
    <div class="border-[1px] border-accent-300 inline fixed bottom-3 right-4 px-5 py-3 rounded-lg text-xs dark:bg-back-900/40 max-w-[12rem] lg:max-w-[20rem] w-full" id="toast">
        <span class="flex flex-row text-sm gap-2 items-center font-medium">
            <i :class="icon"></i>
            <h1>{{ title }}</h1>
        </span>
        <p class="mt-2">{{ desc }}</p>
    </div>
</template>