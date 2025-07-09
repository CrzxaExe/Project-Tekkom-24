<script setup>
import ResourceDetail from '@/components/items/ResourceDetail.vue';
import { setScreenName } from '@/utils/route';
import axios from 'axios';
import { nextTick, reactive } from 'vue';
import prettyMs from 'pretty-ms';
import prettyBytes from 'pretty-bytes';
import Skeleton from '@/components/Skeleton.vue';
const api = await getPerformance();

const data = reactive({
    api
});

setInterval(async () => {
    data.api = await getPerformance()
    nextTick()
}, 10_000);

async function getPerformance() {
    return (await axios.get(import.meta.env.VITE_BACKEND_URL + "performance")).data
}
setScreenName("Dashboard");
</script>

<template>
    <div class="w-full min-h-screen max-x-screen overflow-x-hidden">
        <section class="grid grid-cols-2 lg:grid-cols-4 w-full gap-6 lg:gap-8 max-w-full">
            <ResourceDetail :top="data.api.platform.toUpperCase()" :bottom="data.api.version" />
            <ResourceDetail :top="prettyBytes(data.api.memory.heapUsed).split(' ')[0]+'/'+prettyBytes(data.api.memory.heapTotal)" :bottom="'Ram '+prettyBytes(data.api.memory.rss)" />
            <ResourceDetail :top="prettyBytes(data.api.cpu.user)" :bottom="prettyMs(data.api.uptime)" />
            <ResourceDetail top="Visitor" bottom="User" />
        </section>

        <section class="mt-6 lg:mt-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div class="bg-zinc-100 dark:bg-back-800 px-4 lg:px-6 py-3 lg:py-5 w-full lg:w-[35%] shadow-lg rounded-lg">
                <h1 class="text-xl lg:text-2xl font-semibold">{{ data.api.title }}</h1>
    
                <div class="mt-3">
                    <Skeleton width="32em" height="18em" rounded="0.45em" />
                </div>
            </div>
            <div class="bg-zinc-100 dark:bg-back-800 px-4 lg:px-8 py-3 lg:py-5 w-full lg:w-[65%] shadow-lg rounded-lg">
                <div class="mt-3 min-h-full">
                    <Skeleton width="100%" height="20em" rounded="0.45em" />
                </div>
            </div>
        </section>
    </div>
</template>