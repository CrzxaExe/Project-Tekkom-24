<script setup>
defineProps({
    height: { type: String },
    width: { type: String },
    rounded: { type: String },
    class: { type: String },
})
</script>

<template>
    <div class="skeleton bg-linear-[90deg,#d1d1d1_0%,#c2c0c0_10%,#d1d1d1_20%,#d1d1d1_100%] dark:bg-linear-[90deg,#585858_0%,#848484_10%,#585858_20%,#585858_100%] dark-mode-transition" :class>
        &nbsp;
    </div>
</template>

<style scoped>
@keyframes skeletonAnimation {
    0% {
        background-position: 50% 0;
    }
    100% {
        background-position: -150% 0;
    }
}

.skeleton {
    height: v-bind(height);
    max-width: 100%;
    width: v-bind(width);
    border-radius: v-bind(rounded);
    display: block;
    /* background-image: linear-gradient(
        to right,
        #585858 0%,
        #848484 10%,
        #585858 20%,
        #585858  100%
    ); */
    background-size: 200% 100%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0, 0, 0 / 0.1);
    animation: skeletonAnimation 1.2s linear infinite;
}
</style>