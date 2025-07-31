<script setup>
import SocialMedia from '../SocialMedia.vue';

</script>

<template>
    <footer class="w-full py-6 lg:py-[2.8rem] px-4 lg:px-10 bg-zinc-900 text-zinc-400 text-base lg:text-sm items-start justify-center">
        <div class="w-full min-h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
            <div>
                <h4 class="font-light">Call Us on</h4>
                
                <p class="whitespace-pre-line py-2 mt-1 -mb-3 lg:-mb-6">
                    bahtiar tol cilacap<br/>
                    njepat nang sokaraja
                </p>
                
                <SocialMedia text="TKM24" class="invert dark:invert-0" />
            </div>
        </div>

        <div class="w-full text-center text-xs font-light">@2025</div>
    </footer>
</template>