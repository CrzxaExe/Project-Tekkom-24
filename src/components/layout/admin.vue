<script setup>
import { RouterView } from 'vue-router';
import SideBar from '../navigation/SideBar.vue';
import Header from '../navigation/Header.vue';
</script>

<template>
    <SideBar />
    <Header />

    <Suspense>
        <RouterView class="w-full bg-white dark:bg-back-900 px-6 lg:pl-[16vw] lg:pr-[2vw] pt-22 lg:pt-28 relative" />
    </Suspense>
</template>