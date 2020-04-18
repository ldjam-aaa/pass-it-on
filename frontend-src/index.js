import Vue from 'vue';
import VueRouter from "vue-router";

// Components
import App from './view/App';
import Home from './view/Home';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    render: h => h(App),
    router,
}).$mount('#app');

