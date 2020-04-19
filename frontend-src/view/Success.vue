<template>
    <div>
        <div v-if="userCreated">
            Hello {{ createdUsername }}
        </div>
        <form v-else @submit.prevent="submit">
            <div class="nes-field">
                <label for="username">Username: </label>
                <input v-model="username" type="text" id="username" class="nes-input" />
            </div>
            <input type="submit" class="nes-btn is-primary" value="Sign Up">
        </form>
    </div>
</template>

<script>
import Axios from 'axios';

import { headers } from "../apiconfig";

export default {
    name: "SignUp",
    data() {
        return {
            username: this.$store.state.user.name,
            loading: false,
        }
    },
    computed: {
        userCreated() {
            return this.$store.getters.userCreated;
        },
        createdUsername() {
            return this.$store.state.user.username;
        }
    },
    methods: {
        async submit() {
            this.loading = true;
            const res = await Axios.post(`/api/user/create`, {
                username: this.username
            }, {
                headers
            });
            const user = {
                username: res.data.username,
                uuid: res.data.uuid
            };
            this.$store.commit('user', user);
            this.loading = false;
        }
    }
}
</script>

<style lang="less" scoped>
input[type=submit] {
    margin-top: 1em;
}
</style>
