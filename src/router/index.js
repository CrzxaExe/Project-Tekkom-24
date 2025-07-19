import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WithNavbar from "@/components/layout/withNavbar.vue";
import Admin from "@/components/layout/admin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: WithNavbar,
      children: [
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
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: "",
          name: "Admin Dashboard",
          component: () => import("../views/AdminDashboardView.vue"),
        },
        {
          path: "mahasiswa",
          name: "Mahasiswa Dashboard",
          component: () => import("../views/AdminMahasiswaView.vue"),
        },
        {
          path: "collection",
          name: "Collection Dashboard",
          component: () => import("../views/AdminCollectionView.vue"),
        },
        {
          path: "items",
          name: "Items Dashboard",
          component: () => import("../views/AdminItemsView.vue"),
        },
        {
          path: "settings/api",
          name: "API Dashboard",
          component: () => import("../views/AdminApiView.vue"),
        },
      ],
    },
  ],
});

export default router;
