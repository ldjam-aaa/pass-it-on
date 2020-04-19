import Vue from 'vue';

// Setup Vuex Store
import store from './store/store';
store.dispatch('getUser');

// Styling + Fonts
import '@openfonts/open-sans-condensed_all';
import 'typeface-noto-serif-jp';

// Services
import windowTitle from "./services/windowTitle";

// Components
import App from './view/App';

// Router
import router from './router';

// Set up services
windowTitle(router);

const app = new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
