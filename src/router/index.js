import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: () => import("../views/GalleryView.vue"),
    },
    {
      path: "/collection",
      name: "Collection",
      component: () => import("../views/CollectionView.vue"),
    },
  ],
});

export default router;
