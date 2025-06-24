<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";

const sosmed = ref([
    { icon: "bx bxl-discord-alt", link: "#" },
    { icon: "bx bxl-instagram-alt", link: "#" },
])

onMounted(() => {
    gsap.from("#sosmed-index", {
        y: 50,
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
    <ul class="text-xl mt-4 lg:mt-8 flex flex-row gap-3" id="sosmed-index">
        <li v-for="(e, i) in sosmed" class="sosmed-link">
            <a :href="e.link" :key="i"><i :class="e.icon"></i></a>
        </li>
    </ul>
</template>