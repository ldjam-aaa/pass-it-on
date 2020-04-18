<template>
    <div id="app">
        <div id="nav-bar">
            <img id="logo" :src="logo" />
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
        }
    },
}
</script>

<style lang="less" scoped>
#app {
    width: 100vh;
    height: 100vw;
    margin: 0 3em;
    margin-top: 85px;
    padding: 0 2em;
}
#nav-bar {
    border-bottom: 4px solid #D3D3D3;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 5em;
}
#logo {
    height: 80px;
}
</style>