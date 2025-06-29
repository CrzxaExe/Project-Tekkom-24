<script setup lang="ts">
import Skeleton from '../Skeleton.vue';

</script>

<template>
    <section class="section-screen flex-col min-h-full lg:min-h-screen justify-center items-center lg:py-12 relative mt-16 lg:mt-0 gap-0 overflow-hidden lg:overflow-visible">
        <div class="w-full lg:min-h-[16rem] bg-zinc-400/0 lg:px-40 flex flex-col py-0 z-4 backdrop-grayscale-100">
            <span class="font-regular pt-6 lg:pt-0 text-5xl lg:text-9xl lg:scale-[0.86] tracking-wider uppercase w-full text-left flex flex-row relative">
                <h1>Tekkom</h1>
                <img src="../../assets/code.svg" alt="code" class="dark:invert dark-mode-transition lg:ml-[12rem] medium-only" color="#fff">
            </span>
            <span class="font-extralight text-lg lg:text-6xl tracking-widest uppercase w-[87.43%] lg:text-center -mt-2 lg:-mt-8.5 flex flex-row lg:justify-center">
                <h1>w<span class="lg:font-semibold lg:text-7xl">i</span>th</h1>
            </span>
            <span class="lg:scale-[0.86] tracking-wider uppercase w-full max-w-full lg:text-right -mt-2 lg:-mt-7 relative flex flex-row lg:justify-end items-center">
                <span class="w-full lg:text-3xl font-light pr-20 large-only">Who's Know</span>
                <img src="../../assets/code.svg" alt="code" class="dark:invert dark-mode-transition lg:mr-[9rem] large-only" color="#fff">
                <h1 class="font-regular text-5xl lg:text-9xl pb-4 lg:pb-0">Projectile</h1>

                <span class="lg:absolute -top-12 w-fill right-0 lg:text-3xl font-light large-only">We Know</span>
            </span>
        </div>
        <div class="w-full lg:min-h-[30rem] bg-zinc-400/0 relative flex flex-col justify-between pb-[8rem] lg:pb-0">
            <span class="w-[100%] bg-black dark:bg-white h-[1px] py-[0.5px] block z-[4]"></span>

            <img src="../../assets/shape1.png" alt="shape" class="absolute -top-[3rem] lg:-top-[9rem] max-w-[24rem] lg:max-w-[28rem] left-[37%] right-[37%] -mt-16 lg:mt-0 -z-[2]">
            <span class="z-[2] text-back-200 dark:text-white mix-blend-difference lg:absolute top-[2rem] left-[53%] text-3xl lg:text-6xl mt-14 lg:mt-0">Internationale</span>

            <div class="w-full flex flex-col lg:flex-row-reverse lg:items-end lg:px-46 z-[4] lg:-z-[1]">
                <div class="w-full lg:w-1/2 flex flex-col min-h-full lg:items-end mt-4 lg:mt-0">
                    <Skeleton width="16rem" height="fit" rounded="2em" class="aspect-square" />
                    <div class="w-full flex flex-row justify-end max-h-[7rem] items-center mt-6 lg:mt-[6rem] gap-2">
                        <p class="uppercase aspect-square max-w-[11rem] lg:max-w-[15rem] text-base lg:text-3xl text-justify max-h-[2.3rem] lg:max-h-[7rem] overflow-hidden w-full leading-4 lg:leading-10 py-0">for good reason too new season</p>
                        <img src="../../assets/arrow-square.svg" alt="arrow" class="dark:invert aspect-square max-h-[3rem] lg:max-h-[6.8rem]">
                    </div>
                </div>
            </div>

        </div>

    <div class="absolute bottom-[6.5rem] lg:bottom-[2rem] -left-[8%] border-2 border-dashed w-[6rem] aspect-square border-back-800 -z-[1] opacity-30 lg:opacity-100"></div>
    </section>
</template>