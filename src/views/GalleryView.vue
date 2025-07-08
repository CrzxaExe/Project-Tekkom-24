<script setup>
import GalleryItem from '@/components/items/GalleryItem.vue';
import { testGallery } from '@/constant/globalConst';
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const search = ref(null);
const itemContent = ref(null);

const searchToggle = ref(false);
const searchValue = ref('');

const content = ref(testGallery);

const toggleSearchBtn = (e) => {
    e.preventDefault();
    if (searchValue.value !== '') {
        console.log(searchValue.value)
        return;
    } else {
        searchToggle.value = !searchToggle.value;
    }
}

onMounted(() => {
    search.value.addEventListener("keypress", (event) => {
        // console.log(search.value.value)
        searchValue.value = search.value.value;
    })

    gsap.from(itemContent.value.children, {
        scrollTrigger: {
            trigger: itemContent.value.children,
            // scrub: 1,
            start: 'top 90%',
            end: 'bottom center'

        },
        y: 60,
        opacity: 0
    })
})
</script>

<template>
    <section
        class="section-screen min-h-[20rem] lg:min-h-screen bg-cover flex-col lg:px-0 w-full bg-[url('../assets/gallery-top-light.jpg')] dark:bg-[url('../assets/gallery-top.jpg')] bg-no-repeat bg-center max-w-[100vw] -mt-24 lg:-mt-18 justify-center items-center">
        <div class="w-full -mt-5 lg:-mt-8 lg:pt-3 lg:text-center lg:px-24">
            <h1 class="text-4xl lg:text-7xl tracking-tighter font-semibold">Gallery</h1>
            <h4 class="mt-2 tracking-[0.23em] font-light text-lg lg:text-2xl text-back-900 dark:text-back-500">
                Creativity are limitless</h4>
        </div>
    </section>

    <section class="w-full px-3 lg:px-24 -mt-18 lg:-mt-24 pb-18 md:pb-20 lg:pb-24">
        <div
            class="w-full py-3 lg:py-2 bg-white dark:bg-back-900 px-4 lg:px-8 rounded-xl flex flex-row justify-between items-center max-w-[68vw] lg:max-w-[72vw] mx-auto shadow-2xl shadow-black">
            <h1 class="text-base lg:text-lg tracking-wider font-light">Its all about art</h1>
            <div class="w-fill flex flex-row gap-2 items-center justify-end">
                <input ref="search" placeholder="Search" type="search"
                    class="outline-none max-w-[12rem] lg:max-w-[24rem] resize-none bg-zinc-200 dark:bg-back-800 transition-all duration-300 ease-in-out rounded-md"
                    :class="[searchToggle ? 'w-[100%] py-[0.135rem] px-1.5 lg:px-4' : 'w-[0%]']" />
                <i class='bx bx-search text-xl lg:text-2xl p-0.5 rounded-md flex items-center justify-center' @click="toggleSearchBtn" :class="[searchToggle ? 'bg-zinc-200 dark:bg-back-800' : '']"></i>
            </div>
        </div>


        <ul class="w-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-7 mt-6 lg:mt-20 py-4 gap-4 lg:gap-3 mx-auto lg:px-2 max-w-[68vw] lg:max-w-[72vw] dark-mode-transition" ref="itemContent">
            <GalleryItem  v-for="({ title, type, author, description, images }) in content.filter(e => e.title.includes(searchValue))" :title :type :author :description :images />
        </ul>
    </section>
</template>