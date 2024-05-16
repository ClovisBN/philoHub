import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";

import Profile from "@/views/public/Profile.vue";

import UserCrud from "@/views/admin/UserCrud.vue";

import publicLayout from "@/views/public/layout.vue";
import adminLayout from "@/views/admin/layout.vue";

const routes = [
  {
    path: "/public",
    name: "public",
    component: publicLayout,
    children: [
      {
        path: "profile",
        name: "Profile",
        component: Profile,
        meta: { requiresAuth: true },
      },
    ],
  },

  {
    path: "/admin",
    name: "admin",
    component: adminLayout,
    children: [
      {
        path: "usercrud",
        name: "UserCrud",
        component: UserCrud,
        meta: { requiresAuth: true, requiresAdmin: true }, // Cette route nécessite à la fois l'authentification et les privilèges d'administrateur
      },
    ],
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
