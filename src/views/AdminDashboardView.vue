<script setup>
import ResourceDetail from '@/components/items/ResourceDetail.vue';
import { setScreenName } from '@/utils/route';

setScreenName("Dashboard");
</script>

<template>
    <div class="w-full min-h-screen">
        <section class="grid grid-cols-2 lg:grid-cols-4 w-full gap-6 lg:gap-8 max-w-full">
            <ResourceDetail top="Platform" bottom="version" />
            <ResourceDetail top="Memory" bottom="Storage"/>
            <ResourceDetail top="Uptime" bottom="Last Updated"/>
            <ResourceDetail top="Visitor" bottom="User"/>
        </section>
    </div>
</template>