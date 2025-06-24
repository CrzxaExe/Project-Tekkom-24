<script setup>
import { ref } from 'vue';
import Skeleton from './Skeleton.vue'


const scroll = ref(0);
const toggle = ref(false);

window.addEventListener("scroll", () => {
    scroll.value = window.scrollY;
})

const toggleHamburger = () => {
    toggle.value = !toggle.value;
}

</script>

<template>
    <header class="fixed mx-auto flex justify-center w-full z-[99] transition-all ease-in-out duration-300"
        :class="[scroll > 20 ? 'bg-back-900/80 shadow-lg' : 'bg-back-900/0']">
        <div class="max-w-[110em] py-2 lg:py-2 w-full px-5 lg:px-1 flex flex-row justify-between items-center relative">
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
                    <span class="block tracking-wide text-xl font-semibold">Teknik Komputer '24</span>
                    <span class="block -mt-2 tracking-tight text-sm text-back-200">Universitas Jendral
                        Soedirman</span>
                </div>
            </div>
            <div class="w-full max-w-[1.88rem] flex flex-col gap-2 justify-center items-center lg:hidden cursor-pointer"
                v-on:click="toggleHamburger">
                <span class="w-full h-[2px] bg-white rounded transition-all ease-in-out duration-300 origin-top-left"
                    :class="[toggle ? 'rotate-45 translate-x-1' : '']"></span>
                <span class="w-full h-[2px] bg-white rounded transition-all ease-in-out duration-300"
                    :class="[toggle ? 'opacity-0' : '']"></span>
                <span class="w-full h-[2px] bg-white rounded transition-all ease-in-out duration-300 origin-bottom-left"
                    :class="[toggle ? '-rotate-45 translate-x-1' : '']"></span>
            </div>
            <nav class="text-sm lg:text-base tracking-wider w-[calc(100%-var(--spacing)*6)] lg:w-fit flex flex-col lg:flex-row gap-2 lg:gap-4 uppercase items-center lg:justify-start absolute lg:relative font-secondary lg:opacity-100 top-[4.9rem] lg:top-0 right-3 lg:right-0 py-4 lg:py-0 px-2 lg:px-0 bg-back-800 lg:bg-back-800/0 transition-all ease-in-out rounded-lg"
                :class="[toggle ? 'opacity-100' : 'opacity-0']">
                <RouterLink
                    class="nav-link-btn"
                    to="/" v-on:click="toggleHamburger">
                    home
                </RouterLink>
                <RouterLink
                    class="nav-link-btn"
                    to="about" v-on:click="toggleHamburger">
                    about
                </RouterLink>
                <RouterLink
                    class="nav-link-btn"
                    to="profile" v-on:click="toggleHamburger">
                    profile
                </RouterLink>
                <RouterLink
                    class="nav-link-btn"
                    to="gallery" v-on:click="toggleHamburger">
                    gallery
                </RouterLink>
            </nav>
        </div>
    </header>
</template>