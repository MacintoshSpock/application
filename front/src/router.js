import Vue from "vue";
import Router from "vue-router";
import GetStarted from "./views/GetStarted.vue";
import Page from "./views/Page.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/get-started",
      name: "getstarted",
      component: GetStarted
    },
    {
      path: "/",
      name: "page",
      component: Page
    }
  ]
});
