import Vue from 'vue';
import VueRouter from "vue-router";

import Home from "./view/Home";
import SignUp from "./view/SignUp";
import Dashboard from "./view/Dashboard"
import Start from "./view/Start"
import Results from "./view/Results"
import Failure from "./view/Failure"
import Success from "./view/Success"
import Decode from "./view/Decode"
import Continue from "./view/Continue"
import Leaderboard from "./view/Leaderboard"

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/signup', component: SignUp },
    { path: '/dashboard', component: Dashboard},
    { path: '/start', component: Start},
    { path: '/results', component: Results},
    { path: '/failure', component: Failure},
    { path: '/success', component: Success},
    { path: '/decode', component: Decode},
    { path: '/continue', component: Continue},
    { path: '/leaderboard', component: Leaderboard}
];

const router = new VueRouter({
    routes
});

export default router;
