import Vue from 'vue';

// Setup Vuex Store
import store from './store/store';
store.dispatch('getUser');


// NES..css styling
import 'nes.css/css/nes.min.css';

// Components
import App from './view/App';

// Router
import router from './router';

const app = new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
