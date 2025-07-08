<script setup>
defineProps({
    top: String,
    bottom: String
})
</script>

<template>
    <div class="w-full aspect-[5.5/3] lg:aspect-[8/3] min-h-full bg-zinc-100 dark:bg-back-800 rounded-lg px-4 py-3 text-sm lg:text-base shadow-md">
        <div class="w-full min-h-full flex flex-row gap-6 items-center">
            <div class="block w-[4px] px-[2px] min-h-[6rem] lg:min-h-[7rem] bg-accent-300 rounded-xl"></div>
            <div class="flex flex-col">
                <h2 class="text-2xl lg:text-3xl font-bold">{{ top }}</h2>
                <h5 class="text-sm lg:text-base font-extralight -mt-2">{{ bottom}}</h5>
            </div>
        </div>
    </div>
</template>