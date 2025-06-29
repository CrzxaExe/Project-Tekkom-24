<script setup>
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';
import { onMounted } from 'vue';

import SocialMedia from './../components/SocialMedia.vue'
import Skeleton from '@/components/Skeleton.vue';
import Sec1 from '@/components/sections/Sec1.vue';

onMounted(() => {
  document.fonts.ready.then(() => {
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
      e.classList.add("bg-linear-to-b", "from-black", "dark:from-white", "from-30%", "to-black/40", "dark:to-white/20", "bg-clip-text", "text-transparent", "dark-mode-transition")

      gsap.from(e, {
        duration: 0.1,
        opacity: 0,
        delay: prodi.chars.indexOf(e) * 0.05,
      })
    })

    motto.lines.forEach(e => {
      e.classList.add("bg-linear-to-r/srgb", "from-black", "dark:from-white", "to-accent-300/50", "bg-clip-text", "text-transparent", "lg:leading-17", "tracking-tighterr")

      gsap.from(e, {
        y: 40,
        opacity: 0,
        duration: 0.5,
        delay: motto.lines.indexOf(e) * 0.06 + 0.2
      })
    })
    
    gsap.from(desc.lines, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      delay: 0.4,
      stagger: 0.062
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
  })

  gsap.from("#angkatan", {
    y: 20,
    opacity: 0,
    duration: 0.4,
  })

  gsap.from("#hero-btn", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.42
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
  <!-- Hero Section -->
  <section
    class="h-screen-minus-26 lg:h-screen-minus-22 section-screen flex flex-col lg:flex-row lg:justify-center lg:items-center relative">
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
            <span id="tkn2">Teknik Elektro </span>
          </div>
          <span class="w-[1px] min-h-[4px] px-[2px] bg-black/50 dark:bg-white/50 dark-mode-transition" id="typ"></span>
        </h6>
        <h2 class="text-4xl lg:text-6xl tracking-tighter font-semibold w-[85%] lg:w-full py-[4px] -mt-2" id="motto">
          Mottonya mau apa ini cok gw bingung</h2>
        <p class="mt-4 lg:mt-8 text-zinc-400" id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
          augue mollis, lobortis ante finibus, vulputate odio. Aliquam erat volutpat. Yoga hamil</p>
      </div>

      <SocialMedia />

      <div class="mt-2 lg:mt-4 lg:text-lg inline-flex flex-row gap-3" id="hero-btn">
        <RouterLink to="/about" class="bg-accent-300 px-5 lg:px-7 py-1.5 rounded-sm relative w-full font-semibold overflow-hidden transition-all duration-300 ease-in-out hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-back-900 active:bg-back-800 active:text-white">Profile</RouterLink>
      </div>
    </div>
    <div class="flex-col w-full lg:w-2/3 py-3 lg:py-9 pl-2 lg:pl-8 pb-[3.6rem] lg:pb-0 lg:-mt-9">
      <div class="min-w-full lg:min-h-[60vh] rounded-xl flex flex-col lg:items-end">
        <h1 class="text-4xl lg:text-6xl font-bold tracking-tighter hidden lg:block mt-2 dark-mode-transition" id="impr">Tekkom</h1>

        <div class="w-full lg:min-h-[39.35vh] mt-4 lg:mt-8 left-anim-hero rounded-lg relative">
          <Skeleton class="w-full lg:min-h-[39.35vh]" height="39.5vh" width="100%" rounded="0.45em" />
          <span class="rotate-90 absolute -right-19 medium-only top-12 font-light text-back-200 dark:text-back-700 tracking-wider dark-mode-transition">HomeView.vue</span>
        </div>
        <span class="text-back-700 text-sm mt-2 left-anim-hero">Rajin ngoding, besok aja</span>

      </div>
      <!-- <img
          src="https://komputer.ft.unsoed.ac.id/assets/upload/image/Copy_of_IMG_4646_(2).jpg"
          alt="test"
          /> -->
    </div>

    <span class="absolute bottom-5 text-xs text-back-200 dark:text-back-800 w-full text-center left-anim-hero dark-mode-transition">Di bawah ada apa ya?</span>
  </section>

  <section class="section-screen lg:pt-20 flex-col justify-center items-center lg:gap-2 relative overflow-x-hidden lg:overflow-x-visible">
    <div class="w-full">
      <h1 class="text-4xl lg:text-6xl font-semibold tracking-tight">Insert Text</h1>
    </div>
    <div class="flex gap-4 lg:gap-8 flex-col lg:flex-row w-full min-h-full">
      <div class="min-h-full w-full lg:w-2/3 lg:h-[32rem] lg:max-h-[32rem] relative flex flex-col gap-2">
        <p class="lg:w-[57%] font-extralight text-sm lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices ac dolor eleifend vehicula. Sed at ornare risus. In sagittis enim non pharetra luctus. Nullam posuere convallis hendrerit.</p>
        <h2 class="mt-3 lg:mt-6 text-xl lg:text-3xl">Insert Text</h2>

        <Skeleton width="32rem" class="max-w-[32rem] lg:max-w-[14rem] aspect-square mt-2 lg:mt-4" />

        <div class="w-full lg:bg-back-200 dark:lg:bg-back-700 lg:h-[29rem] lg:w-[58%] rounded-sm mt-2 dark-mode-transition"></div>
        <h5 class="text-2xl lg:text-4xl font-medium tracking-widest uppercase lg:w-1/2 mt-4">Insert a long text</h5>
        
        <Skeleton width="32rem" class="lg:absolute lg:-top-0 lg:aspect-square lg:left-[62%] max-w-full lg:max-w-[32rem] -z-[1]" />

        <span class="-rotate-90 absolute medium-only top-8 -left-13 font-light text-back-200 dark:text-back-600 dark-mode-transition">Insert Text</span>
      </div>
      <div class="min-h-full w-full lg:w-1/3 lg:h-[32rem] lg:max-h-[32rem] flex flex-col lg:justify-end lg:items-end lg:text-right font-extralight text-sm lg:text-lg medium-only">
        <h4>Insert Text</h4>
        <div class="hidden lg:flex flex-row-reverse gap-4 lg:mt-2">
          <div class="w-[3.5rem] aspect-square bg-back-200 dark:bg-back-700 dark-mode-transition"></div>
          <div class="min-h-full aspect-video bg-linear-[-45deg,#9f9f9f_15%,#ffffff00_15%,#ffffff00_25%,#9f9f9f_25%,#9f9f9f_40%,#ffffff00_40%,#ffffff00_50%,#9f9f9f_50%,#9f9f9f_65%,#ffffff00_65%,#ffffff00_75%,#9f9f9f_75%,#9f9f9f_90%] dark:bg-linear-[-45deg,#585858_15%,#24242400_15%,#24242400_25%,#585858_25%,#585858_40%,#24242400_40%,#24242400_50%,#585858_50%,#585858_65%,#24242400_65%,#24242400_75%,#585858_75%,#585858_90%] dark-mode-transition"></div>
        </div>
        <p class="w-full lg:w-[80%] lg:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a sapien ipsum. Maecenas accumsan magna a tortor commodo tempor. Maecenas vehicula dui ut ligula consequat, nec. Njir coeg Yoga hamil</p>
      </div>
    </div>
    <div class="w-full flex flex-row justify-end mt-4 lg:mt-2">
      <h1 class="text-2xl lg:text-4xl font-semibold tracking-tight">Insert A Long Description</h1>
    </div>

    <div class="absolute bottom-[3rem] lg:-bottom-[2rem] -left-[10%] border-2 border-dashed w-[12rem] aspect-square border-back-800 -z-[1] opacity-30 lg:opacity-100"></div>
  </section>

  <Sec1 />
</template>
