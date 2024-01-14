import Pinia from "../views/Pinia.vue";
import Calculator from "../views/Calculator.vue";
import VueExample from "../views/VueExample.vue";
import {
  createRouter,
  createWebHistory,
} from "../../node_modules/vue-router/dist/vue-router";

const routes = [
  {
    path: "/",
    component: Pinia,
  },
  {
    path: "/calculator",
    component: Calculator,
  },
  {
    path: "/example",
    component: VueExample,
  },
];

const history = createWebHistory();

const router = createRouter({ history, routes });

export default router;
