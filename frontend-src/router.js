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
    { path: '/', component: Home, name: "Home" },
    { path: '/signup', component: SignUp, name: "Sign Up" },
    { path: '/dashboard', component: Dashboard, name: "Dashboard" },
    { path: '/start', component: Start, name: "Start" },
    { path: '/results', component: Results, name: "Results" },
    { path: '/failure', component: Failure, name: "Failure" },
    { path: '/success', component: Success, name: "Success" },
    { path: '/decode', component: Decode, name: "Decode" },
    { path: '/continue', component: Continue, name: "Continue" },
    { path: '/leaderboard', component: Leaderboard, name: "Leaderboard" }
];

const router = new VueRouter({
    routes
});

export default router;
