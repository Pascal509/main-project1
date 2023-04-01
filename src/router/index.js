import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import PageNotFound from "../views/PageNotFound.vue";
import RepoView from "../views/RepoView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/project",
    name: "project",
    component: ProjectView,
    children: [
      {
        path: ":repo.html_url",
        name: "repoView",
        component: RepoView,
      },
    ],
  },
  {
    path: "/repo-view/:pathMatch(.*)*",
    name: "not-found-repo",
    component: () => import("../views/RepoNotFound.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
