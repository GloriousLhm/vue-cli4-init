import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// export default new Router({
const router = new Router({
  routes: [
    // {
    //   path:'/',
    //   redirect:'/aaa'
    // },
    {
      path: "/",
      component: (resolve) => require(["../components/page/home.vue"], resolve),
    },
  ],
});

export default router;
