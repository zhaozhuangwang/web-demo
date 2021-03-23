import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/gaode",
    name: "gaode",
    // route level code-splitting
    // this generates a separate chunk (amap.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/gaode/index.vue")
  },
  {
    path: "/gaode3D",
    name: "gaode3D",
    // route level code-splitting
    // this generates a separate chunk (amap.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/gaode/index3D.vue")
  },
  {
    path: "/baidu",
    name: "baidu",
    // route level code-splitting
    // this generates a separate chunk (amap.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/baidu/index.vue")
  },
  {
    path: "/tengxun",
    name: "tengxun",
    // route level code-splitting
    // this generates a separate chunk (amap.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/tengxun/index.vue")
  },
  {
    path: "/Ademos",
    name: "Ademos",
    // route level code-splitting
    // this generates a separate chunk (demos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "demos" */ "../views/demos.vue")
  },
  {
    path: "/element-NavMenu",
    name: "element-NavMenu",
    // route level code-splitting
    // this generates a separate chunk (demos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "element-plus" */ "../views/element-plus/NavMenu.vue")
  },
  {
    path: "/supermap",
    name: "supermap",
    // route level code-splitting
    // this generates a separate chunk (demos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "demos" */ "../views/supermap/index.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
