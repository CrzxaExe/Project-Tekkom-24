<script setup>
import { ref } from 'vue';
import Skeleton from './Skeleton.vue'
import { navbarURL } from '@/constant/globalConst';

const scroll = ref(0);
const toggle = ref(false);
const isDarkMode = ref(true);

window.addEventListener("scroll", () => {
    scroll.value = window.scrollY;
})

const toggleHamburger = () => {
    toggle.value = !toggle.value;
}

const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");

    isDarkMode.value = !isDarkMode.value
    toggleHamburger();
}

</script>

<template>
    <header class="fixed mx-auto flex justify-center w-full z-[99] transition-all ease-in-out duration-300"
        :class="[scroll > 20 ? 'bg-white dark:bg-back-900/80 shadow-lg' : 'bg-back-900/0']">
        <div class="max-w-[110em] py-2 lg:py-2 w-full px-5 lg:px-0 flex flex-row justify-between items-center relative">
            <div class="flex flex-row items-center">
                <div>
                    <Suspense>
                        <template #default>
                            <!-- <img src="https://komputer.ft.unsoed.ac.id/assets/upload/image/image-removebg-preview_(2).png" alt="logo" class="max-h-[4.6rem] hidden lg:block"> -->
                            <img src="https://komputer.ft.unsoed.ac.id/assets/upload/image/thumbs/WhatsApp_Image_2024-11-20_at_13_27_51-removebg-preview19.png"
                                alt="logo" class="max-h-[4.2rem] block lg:max-h-[4.5rem]">
                        </template>
                        <template #fallback>
                            <Skeleton height="4.6rem" width="4.6rem" rounded="50%"
                                class="max-h-[4.2rem] block lg:max-h-[4.5rem]" />
                        </template>
                    </Suspense>
                </div>
                <div class="hidden lg:flex flex-col">
                    <span class="block tracking-wide text-xl font-semibold dark-mode-transition">Teknik Komputer '24</span>
                    <span class="block -mt-2 tracking-tight text-sm text-back-200">Universitas Jendral
                        Soedirman</span>
                </div>
            </div>
            <div class="w-full max-w-[1.88rem] flex flex-col gap-2 justify-center items-center lg:hidden cursor-pointer"
                v-on:click="toggleHamburger">
                <span class="w-full h-[2px] bg-black dark:bg-white rounded transition-all ease-in-out duration-300 origin-top-left"
                    :class="[toggle ? 'rotate-45 translate-x-1' : '']"></span>
                <span class="w-full h-[2px] bg-black dark:bg-white rounded transition-all ease-in-out duration-300"
                    :class="[toggle ? 'opacity-0' : '']"></span>
                <span class="w-full h-[2px] bg-black dark:bg-white rounded transition-all ease-in-out duration-300 origin-bottom-left"
                    :class="[toggle ? '-rotate-45 translate-x-1' : '']"></span>
            </div>
            <nav class="text-sm lg:text-base tracking-wider w-[calc(100%-var(--spacing)*6)] lg:w-fit flex flex-col lg:flex-row gap-2 lg:gap-4 uppercase items-center lg:scale-100 lg:justify-start absolute lg:relative font-secondary lg:opacity-100 top-[4.9rem] lg:top-0 right-3 lg:right-0 py-4 lg:py-0 px-2 lg:px-0 bg-back-800 lg:bg-back-800/0 transition-all ease-in-out rounded-lg"
                :class="[toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-0']">
                <RouterLink
                    v-for="({ text, url }) in navbarURL"
                    class="nav-link-btn"
                    :to="url" v-on:click="toggleHamburger">
                    {{ text }}
                </RouterLink>
                <button class="nav-link-btn px-3 py-2 bg-zinc-400/50 hover:text-back-200 hover:bg-zinc-400/20  dark:bg-zinc-300/40 dark:hover:bg-zinc-300/10" @click="toggleDarkMode">
                    <i class='bx bx-moon dark-mode-transition' :class="[isDarkMode ? 'bxs-moon' : 'bx-moon']"></i>
                </button>
            </nav>
        </div>
    </header>
</template>