<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <section class="section-screen min-h-full flex-col lg:px-18">
        <div class="w-full pt-3">
            <h1 class="text-3xl lg:text-5xl tracking-tighter font-semibold">Profile Tekkom '24</h1>
        </div>

        <div class="flex flex-row w-full h-[16rem] lg:h-[24rem] gap-6 mt-4 px-10">
            <div class="min-h-full w-full lg:w-[55%] bg-zinc-400"></div>
            <div class="min-h-full w-full lg:w-[30%] bg-zinc-400"></div>
            <div class="min-h-full w-full lg:w-[15%] bg-zinc-400"></div>
        </div>

        <h2 class="mt-4 text-xl lg:text-3xl font-medium tracking-wide">Insert Text</h2>
        
        <p class="mt-4 text-xs lg:text-sm px-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non turpis a augue accumsan cursus. Aenean placerat sagittis viverra. Aenean non fringilla sapien. Etiam ultrices libero tortor, a semper erat feugiat eget. In elit lorem, faucibus et dapibus in, placerat ut diam. Fusce et erat augue. Duis non massa ullamcorper, accumsan massa et, tempus nulla. Fusce risus velit, tristique a hendrerit vitae, scelerisque at ligula.</p>
        <p class="mt-4 text-xs lg:text-sm px-10 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar pellentesque lorem, in consectetur nulla viverra et. Quisque quis vulputate erat, et sagittis dui. Mauris vel pulvinar purus. Vestibulum vel nisl a eros sollicitudin iaculis. Maecenas hendrerit dui eu massa bibendum, eget pellentesque augue tempor. Nunc mattis orci vitae ipsum semper, sit amet aliquam risus lacinia. Nunc volutpat eget ante eu fringilla. Praesent porta scelerisque elementum. Proin dapibus molestie neque eget dignissim. Morbi scelerisque mi nec dui varius, at blandit elit finibus. Quisque nec justo ac tellus commodo pellentesque.</p>

        <span class="text-back-700 text-xs lg:text-sm mt-4 lg:mt-6">Bottom Text</span>

        <span class="mt-4 lg:mt-6">Nih data mahasigma</span>
    </section>
    
    <section class="section-screen min-h-full flex-col lg:pt-14 lg:px-18 -mt-4 lg:-mt-12">
        <h2 class="text-2xl lg:text-4xl font-semibold tracking-wide">Mahasigma</h2>
        <div class="w-full lg:px-10">
            <div class="min-h-full w-full h-[34rem] bg-zinc-400 mt-4"></div>
        </div>
    </section>

    <RouterLink to="/admin">Admin</RouterLink>
</template>
