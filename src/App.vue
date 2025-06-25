<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Toast from './components/Toast.vue';

gsap.registerPlugin(ScrollTrigger, SplitText);
</script>

<template>
  <div id="top"></div>

  <Navbar />

  <div class="w-full block pt-22 lg:pt-18 relative"></div>

  <RouterView />

  <Toast
   title="Belum Kelar"
   desc="Ini belum final yah, jadi sabar dulu. Logo juga blom ada tuh, lagi dibikin"
   icon="bx bx-package" />
</template>