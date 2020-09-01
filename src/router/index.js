import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Projects from "../views/Projects.vue";
import Team from "../views/Team.vue";
import Register from "../views/Register.vue";
import LogIn from "../views/LogIn.vue";
import MyAccount from "../views/MyAccount.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Dashboard },
  { path: "/dashboard", component: Dashboard },
  { path: "/projects", component: Projects },
  { path: "/team", component: Team },
  { path: "/register", component: Register },
  { path: "/login", component: LogIn },
  { path: "/myaccount", component: MyAccount },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
