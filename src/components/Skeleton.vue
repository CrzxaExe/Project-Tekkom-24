<script setup>
defineProps({
    height: { type: String },
    width: { type: String },
    rounded: { type: String },
    class: { type: String },
})
</script>

<template>
    <div class="skeleton" :class>
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
    width: v-bind(width);
    border-radius: v-bind(rounded);
    display: block;
    background-image: linear-gradient(
        to right,
        #464646 0%,
        #686868 10%,
        #464646 20%,
        #464646 100%
    );
    background-size: 200% 100%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0, 0, 0 / 0.1);
    animation: skeletonAnimation 1.2s linear infinite;
}
</style>