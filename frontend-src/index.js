import Vue from 'vue';

// Components
import App from './view/App';

// Router
import router from './router';

const app = new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
