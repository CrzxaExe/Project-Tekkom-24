<script setup>
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';
import { onMounted } from 'vue';

import SocialMedia from './../components/SocialMedia.vue'

onMounted(() => {
  const prodi = new SplitText("#prodi", { type: "chars" });
  const motto = new SplitText("#motto", { type: "lines" });
  const desc = new SplitText("#desc", { type: "lines" });

  const tkn1 = new SplitText("#tkn1", { type: "chars" });
  const tkn2 = new SplitText("#tkn2", { type: "chars" });

  const tl = gsap.timeline({
    delay: 0.3,
    repeat: -1
  })

  prodi.chars.forEach(e => {
    e.classList.add("bg-linear-to-b", "from-black", "dark:from-white", "from-30%", "to-black/40", "dark:to-white/20", "bg-clip-text", "text-transparent")

    gsap.from(e, {
      duration: 0.1,
      opacity: 0,
      delay: prodi.chars.indexOf(e) * 0.05,
    })
  })

  gsap.from("#angkatan", {
    y: 20,
    opacity: 0,
    duration: 0.4,
  })

  motto.lines.forEach(e => {
    e.classList.add("bg-linear-to-r/srgb" , "from-black", "dark:from-white" ,"to-accent-300/50", "bg-clip-text" ,"text-transparent", "lg:leading-17", "tracking-tighterr")

    gsap.from(e, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      delay: motto.lines.indexOf(e) * 0.06 + 0.2
    })
  })

  desc.lines.forEach(e => {
    gsap.from(e, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      delay: motto.lines.indexOf(e) * 0.062 + 0.4
    })
  })

  gsap.from("#hero-btn", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.42
  })

  tkn1.chars.forEach(e => {
    tl.from(e, {
      width: 0,
      opacity: 0,
      duration: 0.15
    })
  })
  tl.from(tkn1.chars[0], { duration: 1.2 })
  tkn1.chars.reverse().forEach(e => {
    tl.to(e, {
      width: 0,
      opacity: 0,
      yoyo: true,
      duration: 0.03
    })
  })

  tkn2.chars.forEach(e => {
    tl.from(e, {
      width: 0,
      opacity: 0,
      duration: 0.17
    })
  })
  tl.from(tkn2.chars[0], { duration: 1 })
  tkn2.chars.reverse().forEach(e => {
    tl.to(e, {
      width: 0,
      opacity: 0,
      duration: 0.03
    })
  })

  gsap.from("#typ", {
    opacity: 0.5,
    duration: 0.7,
    repeat: -1,
    yoyo: true,
  })

  gsap.from("#impr", {
    y: 42,
    opacity: 0,
    delay: 0.2,
    duration: 0.4
  })
  gsap.from(".left-anim-hero", {
    x: 52,
    opacity: 0,
    delay: 0.2,
    duration: 0.4,
    stagger: 0.1
  })
})
</script>

<template>
    <section class="h-screen-minus-26 lg:h-screen-minus-22 section-screen flex flex-col lg:flex-row lg:justify-center lg:items-center">
      <div class="flex-col w-full lg:w-1/3">
        <div class="small-only">
          <h1 class="text-3xl font-bold inline-block" id="prodi">Teknik Komputer</h1>
          <h3 class="text-sm text-back-200 tracking-wider" id="angkatan">2024</h3>
        </div>

        <div class="mt-10 lg:mt-0">
          <h6 class="text-sm text-back-700">
            Include
            <div class="inline-block">
              <span id="tkn1">Informatika</span>
              <span id="tkn2">Teknik Elektro</span>
            </div>
            <span class="w-[1px] min-h-[4px] px-[2px] bg-black/50 dark:bg-white/50" id="typ"></span>
          </h6>
          <h2 class="text-4xl lg:text-6xl tracking-tighter font-semibold w-[85%] lg:w-full py-[4px] -mt-2" id="motto">Mottonya mau apa ini cok gw bingung</h2>
          <p class="mt-4 lg:mt-8 text-zinc-400" id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a augue mollis, lobortis ante finibus, vulputate odio. Aliquam erat volutpat. Yoga hamil</p>
        </div>

        <SocialMedia />

        <div class="mt-2 lg:mt-4 lg:text-lg inline-flex flex-row gap-3" id="hero-btn">
          <a 
            href="#" 
            class="bg-accent-300 px-5 lg:px-7 py-1.5 rounded-sm relative w-full font-semibold overflow-hidden transition-all duratino-300 ease-in-out hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-back-900 active:bg-back-800 active:text-white"
          >About Us</a>
          </div>
        </div>
        <div class="flex-col w-full lg:w-2/3 py-3 lg:py-9 pl-2 lg:pl-8">
          <div class="min-w-full lg:min-h-[60vh] rounded-xl flex flex-col lg:items-end">
            <h1 class="text-4xl lg:text-6xl font-bold tracking-tighter hidden lg:block mt-2" id="impr">Tekkom</h1>

            <div class="bg-zinc-300/30 w-full lg:min-h-[39.3vh] mt-4 lg:mt-8 left-anim-hero"></div>
            <span class="text-back-700 text-sm mt-2 left-anim-hero">Njir</span>
          </div>
          <!-- <img
          src="https://komputer.ft.unsoed.ac.id/assets/upload/image/Copy_of_IMG_4646_(2).jpg"
          alt="test"
          /> -->
        </div>
    </section>
</template>
