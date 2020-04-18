import Vue from 'vue';

// NES..css styling
import 'nes.css/css/nes.min.css';

// Components
import App from './view/App';

// Router
import router from './router';

const app = new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
