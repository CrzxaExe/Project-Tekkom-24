<script setup>
import { screenName } from '@/utils/route';
import { dark } from '@/utils/darkmode';
import { ref } from 'vue';

const toggle = ref(false);
const isDarkMode = dark;

const toggleHamburger = () => {
    toggle.value = !toggle.value;
}

const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");

    isDarkMode.value = !isDarkMode.value;
    toggleHamburger();
}

</script>

<template>
    <header
        class="w-full px-2 lg:px-6 shadow-lg shadow-black/20 py-2 lg:py-4 bg-zinc-200 dark:bg-zinc-700 pl-14 lg:pl-[16vw] fixed z-[9] flex flex-row justify-between items-center">
        <h1 class="text-lg lg:text-xl font-semibold">{{ screenName }}</h1>

        <button
            class="nav-link-btn aspect-square w-fit px-3 py-2 bg-zinc-400/50 hover:text-accent-700 dark:hover:text-accent-300 hover:bg-zinc-400/30  dark:bg-zinc-300/50 dark:hover:bg-zinc-300/10"
            @click="toggleDarkMode">
            <i class='bx bx-moon dark-mode-transition' :class="[isDarkMode ? 'bxs-moon' : 'bx-moon']"></i>
        </button>
    </header>
</template>