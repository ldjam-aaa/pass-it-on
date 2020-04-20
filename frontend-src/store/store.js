import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import Cookie from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            username: "",
            uuid: Cookie.get("uuid") || "",
        },
        config: {

        },
    },
    getters: {
        userCreated(state) {
            return !!state.user.uuid;
        }
    },
    mutations: {
        user(state, val) {
            Cookie.set("uuid", val.uuid);
            state.user = val;
        },
        config(state, val) {
            state.config = val;
        },
    },
    actions: {
        /**
         * Get the user if the user is already signed up
         * @async
         * @param {Object} ctx the store context
         */
        async getUser(ctx) {
            if (!ctx.getters.userCreated) {
                return;
            }
            const res = await Axios.get(`/api/user/get/${ctx.state.user.uuid}`);
            const user = {
                username: res.data.username,
                uuid: res.data.uuid,
            };
            if (res.status === 200) {
                ctx.commit('user', user);
            }
        },
        /**
         * Sign out the user
         * @param ctx the store context
         */
        signout(ctx) {
            const user = {
                username: "",
                uuid: "",
            };
            ctx.commit('user', user);
        },
        async getConfig(ctx) {
            const res = await Axios.get(`/api/config`);
            if (res.status === 200) {
                ctx.commit('config', res.data);
            }
        },
    }
})

