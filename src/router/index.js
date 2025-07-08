import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WithNavbar from "@/components/layout/withNavbar.vue";
import Admin from "@/components/layout/admin.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      props: true,
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
          props: true,
          component: () => import("../views/AdminDashboardView.vue"),
        },
        {
          path: "/admin/mahasiswa",
          name: "Mahasiswa Dashboard",
          props: true,
          component: () => import("../views/AdminMahasiswaView.vue"),
        },
        {
          path: "/admin/collection",
          name: "Collection Dashboard",
          props: true,
          component: () => import("../views/AdminCollectionView.vue"),
        },
        {
          path: "/admin/items",
          name: "Items Dashboard",
          props: true,
          component: () => import("../views/AdminItemsView.vue"),
        },
        {
          path: "/admin/settings/api",
          name: "API Dashboard",
          props: true,
          component: () => import("../views/AdminApiView.vue"),
        },
      ],
    },
  ],
});

export default router;
