<script setup>
import { ref } from 'vue';

defineProps({
    name: String,
    url: String,
})

const toggle = ref(false);

const handleToggle = () => {
    toggle.value = !toggle.value;
}
</script>

<template>
        <li class="aspect-square w-full overflow-hidden rounded-md cursor-pointer transition-all transition-normal duration-300 ease-in-out" @click="handleToggle" :class="[toggle ? 'col-span-2' : 'col-span-1']">
            <div class="w-full object-cover object-center min-h-fit aspect-square">
                <img :src="url" :alt="name" v-if="url !== ''">
                <div class="w-full min-h-[100%] bg-zinc-200 dark:bg-back-800" v-else />
            </div>
        </li>
</template>