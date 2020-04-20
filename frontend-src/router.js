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
import About from "./view/About";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home, name: "Home" },
    { path: '/signup', component: SignUp, name: "Sign Up" },
    { path: '/dashboard', component: Dashboard, name: "Dashboard" },
    { path: '/start/:game_id', component: Start, name: "Start" },
    { path: '/results', component: Results, name: "Results" },
    { path: '/failure/:game_id', component: Failure, name: "Failure" },
    { path: '/success/:game_id', component: Success, name: "Success" },
    { path: '/decode/:game_id', component: Decode, name: "Decode" },
    { path: '/continue/:game_id', component: Continue, name: "Continue" },
    { path: '/leaderboard', component: Leaderboard, name: "Leaderboard" },
    { path: '/about', component: About, name: "About" },
];

export const disableGradientList = [
    "Leaderboard",
    "Dashboard",
    "About"
];

const router = new VueRouter({
    routes
});

export default router;
