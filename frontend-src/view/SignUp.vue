<template>
    <div>
        <div v-if="userCreated">
            Hello {{ createdUsername }}
        </div>
        <form v-else @submit.prevent="submit">
            <label>Username: <input type="text" v-model="username" /></label>
            <input type="submit" value="Sign Up">
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

<style scoped>

</style>