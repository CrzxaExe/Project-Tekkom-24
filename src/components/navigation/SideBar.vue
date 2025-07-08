<script setup>
import { adminURL } from '@/constant/globalConst';
import LineWithText from '../items/LineWithText.vue';
import { sidebar, toggleHamburger } from '@/utils/var';

const toggle = sidebar;

// console.log(import.meta.env.VITE_BACKEND_URL)

</script>

<template>
    <div
        class="flex fixed border-0 border-r-[1px] border-back-200 dark:border-back-800 max-w-[40vw] lg:max-w-[14vw] min-h-screen flex-col bg-zinc-100 dark:bg-zinc-800 z-[10] w-full lg:left-0 transition-all ease-in-out duration-300" :class="[toggle ? 'left-0' : '-left-[40%]']">
        <div class="flex flex-row gap-2 w-full">
            <RouterLink to="/" class="flex flex-col medium-only px-3 lg:px-4 py-2 lg:pt-6 lg:pb-3">
                <h1 class="text-2xl lg:text-3xl font-bold tracking-tighter">Admin Panel</h1>
                <span class="text-sm lg:text-base font-light -mt-2 block tracking-widest text-zinc-500 dark:text-back-500">Tekkom 24</span>
            </RouterLink>
            <div class="w-full max-w-[1.48rem] flex flex-col gap-1.5 justify-center items-center lg:hidden cursor-pointer lg:relative lg:top-0 transition-all ease-in-out duration-300 absolute ml-[13.2rem] top-4.5"
                v-on:click="toggleHamburger">
                <span class="w-full h-[2px] bg-black dark:bg-white rounded transition-all ease-in-out duration-300 origin-top-left"
                    :class="[toggle ? 'rotate-45 translate-x-1' : '']"></span>
                <span class="w-full h-[2px] bg-black dark:bg-white rounded transition-all ease-in-out duration-300"
                    :class="[toggle ? 'opacity-0' : '']"></span>
                <span class="w-full h-[2px] bg-black dark:bg-white rounded transition-all ease-in-out duration-300 origin-bottom-left"
                    :class="[toggle ? '-rotate-45 translate-x-1' : '']"></span>
            </div>
        </div>

        <nav class="text-sm lg:text-base tracking-wider w-full flex flex-col gap-2 lg:gap-1 uppercase items-center lg:items-start lg:scale-100 lg:justify-start relative font-secondary py-2 lg:py-0 pr-6 lg:pr-0 transition-all ease-in-out rounded-lg lg:mt-2"
             v-for="section in Object.keys(adminURL)">
        <LineWithText :text="section" />

            <RouterLink v-for="({ text, url, icon }) in adminURL[section]" class="nav-link-btn text-back-200 dark:text-back-600 lg:py-[0.475rem] tracking-wide w-full text-left flex flex-row gap-2 lg:gap-4 items-center hover:text-white hover:bg-back-800" :to="url"
                >
                <i v-if="icon" :class="icon" class="text-xl lg:text-2xl"></i>
                {{ text }}
            </RouterLink>
        </nav>
    </div>
</template>