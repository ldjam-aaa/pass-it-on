import Vue from 'vue';

// Setup Vuex Store
import store from './store/store';
store.dispatch('getUser');
store.dispatch('getConfig');

// Set up music
import music from './audio/half-mystery.mp3';
import { Howl } from 'howler';
const musicHowl = new Howl({
    src: [music],
    loop: true,
    autoplay: true,
    volume: 0.025,
});


// Styling + Fonts
import '@openfonts/open-sans-condensed_all';
import 'typeface-noto-serif-jp';
import 'typeface-nova-mono';

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
