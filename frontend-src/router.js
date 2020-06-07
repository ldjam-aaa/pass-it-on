/**
 * Copyright 2020 The Pass It On Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
import Error from "./view/Error";

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
    { path: '/error', component: Error, name: "Error" },
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
