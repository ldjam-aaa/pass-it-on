import Vue from 'vue';
import VueRouter from "vue-router";

import Home from "./view/Home";
import SignUp from "./view/SignUp";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/signup', component: SignUp }
];

const router = new VueRouter({
    routes
});

export default router;
