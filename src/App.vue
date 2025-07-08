<script setup>
import { RouterView } from 'vue-router'
import { gsap } from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { dark } from './utils/darkmode';

gsap.registerPlugin(ScrollTrigger, SplitText);

if(dark.value) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
</script>

<template>
  <div id="top" />

  <RouterView />
</template>