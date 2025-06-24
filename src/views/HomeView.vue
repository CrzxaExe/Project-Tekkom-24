<script setup>
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';
import { onMounted } from 'vue';

onMounted(() => {
  const prodi = new SplitText("#prodi", { type: "chars" });
  const motto = new SplitText("#motto", { type: "lines" });
  const desc = new SplitText("#desc", { type: "lines" });

  prodi.chars.forEach(e => {
    e.classList.add("bg-linear-to-b", "from-white", "from-30%", "to-white/20", "bg-clip-text", "text-transparent")

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
    e.classList.add("bg-linear-to-r/srgb" ,"from-white" ,"to-accent-300/50", "bg-clip-text" ,"text-transparent")

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
})
</script>

<template>
    <section class="h-screen-minus-26 lg:h-screen-minus-22 section-screen flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <!-- <img
          src="https://komputer.ft.unsoed.ac.id/assets/upload/image/Copy_of_IMG_4646_(2).jpg"
          alt="test"
        /> -->
       <div class="flex-col w-full lg:w-1/4">
        <div class="small-only">
          <h1 class="text-3xl font-bold inline-block" id="prodi">Teknik Komputer</h1>
          <h3 class="text-sm text-back-200 tracking-wider" id="angkatan">2024</h3>
        </div>

        <div class="mt-10 lg:mt-0">
          <h2 class="text-3xl lg:text-4xl tracking-tight font-semibold w-[85%] lg:w-full" id="motto">Mottonya mau apa ini cok gw bingung</h2>
          <p class="mt-4 lg:mt-8 text-zinc-400" id="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a augue mollis, lobortis ante finibus, vulputate odio. Aliquam erat volutpat.</p>
        </div>
      </div>
      <div class="flex-col w-full lg:w-3/4"></div>
    </section>
</template>
