<script setup>
import { RouterView } from 'vue-router';
import Navbar from '../navigation/Navbar.vue';
import Footer from '../sections/Footer.vue';
</script>

<template>
  <Navbar />

  <div class="w-full block pt-22 lg:pt-18 relative"></div>

  <RouterView />

  <Footer />
</template>