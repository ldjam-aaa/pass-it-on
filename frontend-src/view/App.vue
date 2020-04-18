<template>
    <div id="app">
        <div id="nav-bar">
            <router-link to="/"><img id="logo" :src="logo" /></router-link>
            <div class="right-align">
                <h4>Hi {{ username }}!</h4>
                <router-link v-if="!userCreated" to="/signup"><h2>Sign Up</h2></router-link>
                <a v-if="userCreated" href="#" @click="signout"><h2>Sign Out</h2></a>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
import logo from '../img/logo.png';

export default {
    name: "App",
    computed: {
        logo() {
            return logo;
        },
        userCreated() {
            return this.$store.getters.userCreated;
        },
        username() {
            if (this.userCreated) {
                return this.$store.state.user.username;
            }
            return "Anonymous";
        }
    },
    methods: {
        signout() {
            this.$store.dispatch('signout');
            document.location = "/";
        }
    }
}
</script>

<style lang="less" scoped>
#app {
    width: 100vh;
    height: 100vw;
    margin: 0 auto;
    margin-top: 100px;
    padding: 0 2em;
    max-width: 1000px;
}
#nav-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 4px solid #D3D3D3;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    @media @desktop {
        padding: 0 5em;
    }

    .right-align {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: auto;

        * {
            margin-left: 10px;
        }
    }
}
#logo {
    height: 80px;
}
</style>