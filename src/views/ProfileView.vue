<script setup lang="ts">
import Carditem from '@/components/items/Carditem.vue';
import IdCard from '@/components/items/IdCard.vue';
import Techstack from '@/components/items/Techstack.vue';
import { contributors, testMahasiswa } from '@/constant/globalConst';
import { ref } from 'vue';

const content = ref(0);

const setContent = (n) => {
    content.value = n;
}
</script>

<template>
    <section
        class="section-screen max-w-screen lg:min-h-screen flex flex-col lg:pt-[9.2rem] lg:pb-2 px-0 lg:px-0 -mt-[2rem] lg:-mt-[4rem] dark:bg-back-900 bg-white justify-between">
        <div class="lg:px-28 pb-12 lg:pb-0 w-full flex justify-center items-center">
            <img src="../assets/logo-tekkom.svg" alt="logo"
                class="contrass-100 dark:contrast-0 dark:fill-white select-none aspect-square max-w-[10rem]" />
        </div>
        <div class="w-full flex flex-col">
            <span
                class="block font-chillax-bold font-light uppercase bg-white dark:bg-back-900 py-0 leading-15 lg:leading-32 text-zinc-700 dark:text-zinc-200 text-[2.3rem] lg:text-[6.4rem] tracking-widest shadow-xl px-4 lg:px-28 relative z-[3] -mt-4.5 lg:-mt-9 text-left">Computer</span>
            <span
                class="block font-chillax-bold font-light uppercase bg-white dark:bg-back-900 py-0 leading-15 lg:leading-32 text-zinc-700 dark:text-zinc-200 text-[2.3rem] lg:text-[6.4rem] tracking-widest shadow-xl px-4 lg:px-28 relative z-[2] -mt-4.5 lg:-mt-9 text-right">Engineering</span>
            <span
                class="block font-chillax-bold font-light uppercase bg-white dark:bg-back-900 py-0 leading-15 lg:leading-32 text-zinc-700 dark:text-zinc-200 text-[2.3rem] lg:text-[6.4rem] tracking-widest shadow-xl px-4 lg:px-28 relative z-[1] -mt-4.5 lg:-mt-9 text-center">Profile</span>
        </div>
    </section>

    <section
        class="bg-[#2c2c2c] dark:bg-zinc-300 z-[0] -mt-8 lg:-mt-3 text-back-200 dark:text-back-600 px-4 lg:px-8 py-6">
        <div class="w-full flex flex-col items-center justify-center max-w-5xl mx-auto">
            <h1 class="text-sm lg:text-xs">Community</h1>

            <p class="mt-4 md:mt-8 lg:mt-12 text-base md:text-lg lg:text-2xl text-justify">
                Tekkom adalah komunitas teknologi yang berdedikasi untuk mengembangkan talenta digital Indonesia. Kami
                menggabungkan inovasi, kolaborasi, dan pembelajaran berkelanjutan untuk menciptakan dampak positif di
                industri teknologi
            </p>

            <div
                class="border-0 border-b-[2px] dark:border-back-600 border-back-200 mt-8 lg:mt-12 w-full py-1.5 flex flex-row gap-2 justify-between text-sm lg:text-base">
                <button class="w-full text-center cursor-pointer" @click="setContent(0)">Visi & Misi</button>
                <button class="w-full text-center cursor-pointer" @click="setContent(1)">Statistik</button>
                <button class="w-full text-center cursor-pointer" @click="setContent(2)">Logo</button>
            </div>
        </div>

        <div class="mx-auto flex max-w-[92rem] mt-8 md:mt-10 lg:mt-20 lg:aspect-[3/1] mb-4 lg:overflow-hiddens">
            <div v-if="content === 0"
                class="w-full min-h-full flex flex-col lg:flex-row items-start justify-center gap-8 md:gap-10 lg:gap-16">
                <div class="w-full lg:w-1/2">
                    <h1 class="text-base lg:text-xl text-center w-full">Visi</h1>

                    <p class="text-lg lg:text-xl text-justify mt-2 lg:mt-4">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Morbi nec auctor risus. Nunc vel ipsum
                        metus. Nulla egestas augue eu nibh laoreet scelerisque. Aenean sagittis gravida nisl. Maecenas
                        orci risus.<br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec auctor risus. Nunc vel ipsum
                        metus. Nulla egestas augue eu nibh laoreet scelerisque. Aenean sagittis gravida nisl. Maecenas
                        orci risus. </p>
                </div>
                <div class="w-full lg:w-1/2">
                    <h1 class="text-base lg:text-xl text-center w-full">Misi</h1>

                    <ol class="text-lg lg:text-xl list-decimal mt-2 lg:mt-4 flex flex-col gap-4 lg:gap-2 pl-6 lg:pl-2">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue elit ipsum. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue elit ipsum. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue elit ipsum. </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue elit ipsum. </li>
                    </ol>
                </div>
            </div>

            <div v-if="content === 1" class="w-full min-h-full">
                <h1 class="text-xl lg:text-2xl">Statistik</h1>
                <div class="flex flex-col lg:flex-row w-full max-h-[24rem] mt-4 lg:mt-8 overflow-hidden gap-8 lg:gap-4">
                    <div class="aspect-video w-full lg:w-2/3 min-h-full bg-slate-600"></div>

                    <div class="w-full lg:2/3">
                        Place statistic data here
                    </div>
                </div>
            </div>
            <div v-if="content === 2"
                class="w-full min-h-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8-mt-4 lg:-mt-18">
                <img src="../assets/logo-tekkom.svg" alt="logo"
                    class="dark:contrass-100 contrast-0 select-none aspect-square w-full max-w-[22rem]" />

                <div class="w-full lg:w-1/2 px-0 lg:px-8">
                    <h1>Filosofi</h1>

                    <ul class="list-disc pl-4">
                        <li>Chip: tolong diisi</li>
                        <li>Bentuk Listrik: tolong diisi</li>
                        <li>Elektron: tolong diisi</li>
                        <li>Gear: tolong diisi</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="py-8 lg:py-6 px-4 lg:px-28 w-full mb-4 lg:mb-12">
        <h1 class="text-4xl lg:text-6xl font-chillax font-light">Meet Our Members</h1>

        <div class="mt-8 lg:mt-16 w-full">
            <div class="w-full flex flex-row justify-between items-center">
                <h1>Tekkom &apos;24</h1>
                <div class="flex flex-row items-center justify-end gap-2">
                    <input type="text" placeholder="Search / Ctrl + K" class="bg-back-200 dark:bg-back-700 outline-none px-3 rounded-lg w-[15rem] not-focus:placeholder-shown:max-w-[4.8rem] focus:max-w-[15rem] transition-all ease-in-out duration-300">
                    <i class='bx bx-search text-lg lg:text-xl rounded-md flex items-center justify-center'></i>
                </div>
            </div>
            <ul
                class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-2 justify-center items-start min-h-fit max-h-[24rem] lg:min-h-[30rem] lg:max-h-[30rem] relative">
                <li v-for="({ nim, active, name, birthday, username, bio }, i) in testMahasiswa"
                    class="flex justify-center items-center max-h-fit" :key="i">
                    <IdCard :nim :user-active="active" :name :birthday="new Date(birthday)" :username :bio />
                </li>
            </ul>
        </div>
    </section>

    <section class="w-full min-h-full py-4 pb-16 px-4 lg:px-28">
        <div
            class="flex flex-col w-full min-h-full border-0 border-t-[1px] border-black dark:border-white pt-[3.5rem] lg:pt-[5.5rem] pb-5">
            <div class="flex flex-col lg:flex-row gap-6 lg:gap-2">
                <div class="w-full lg:w-1/2">
                    <h1 class="text-4xl lg:text-5xl tracking-widest font-chillax">About Website</h1>
                    <p class="mt-4 lg:mt-2 max-w-[40rem] text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Vestibulum consequat porta dolor, ullamcorper imperdiet ligula sodales vitae. Pellentesque
                        lectus metus, lacinia a gravida ut, venenatis eget. Apalah ini DJ Ohim, kerapihan tuh nimpanya
                    </p>
                </div>
                <div class="w-full lg:w-1/2 flex items-center justify-end">
                    <a href="#"
                        class="w-full lg:w-fit flex flex-row justify-center items-center bg-black hover:bg-black/50 dark:bg-white dark:hover:bg-white/50 px-0 gap-1 lg:px-10 dark:text-back-900 text-white py-1.5 font-semibold text-lg lg:text-base rounded-xl lg:rounded-full transition-all ease-in-out duration-300"><i
                            class="bx bxl-github"></i>Github</a>
                </div>
            </div>
        </div>
        <div class="w-full h-[12rem] mt-2 lg:mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
            <Carditem icon="bx bxs-bolt" name="Fast and Light" description="Dibuat dengan framework Vue, maka tak heran jika website memiliki performa yang cepat dan tentunya ringan." />
            <div class="bg-zinc-400"></div>
            <div class="bg-zinc-400"></div>
            <div class="bg-zinc-400"></div>
        </div>

        <div class="w-full">
            <h1 class="text-3xl lg:text-4xl font-chillax mt-6 lg:mt-12 font-light tracking-tighter w-full">
                Technology Behind This</h1>
        </div>

        <div class="w-full mt-0 lg:mt-2">
            <Techstack />
        </div>

        <div class="w-full">
            <h1 class="text-3xl lg:text-4xl font-chillax mt-4 lg:mt-8 font-light tracking-tighter w-full text-center">
                Contributors</h1>
        </div>

        <div class="w-full h-[8rem] mt-4 lg:mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10">
            <Carditem v-for="({ name, icon, member}) in contributors" :icon :name :description="member.join('\n')" />
        </div>
    </section>
</template>
