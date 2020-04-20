<template>
    <div id="app">
        <div id="music-controls" @click="toggleMusic">
          <div v-if="musicplaying" title="Pause music">&#9646;&#9646;</div>
          <div v-else title="Resume music">&#9654;</div>
        </div>
        <div class="wrapper">
            <router-view />
        </div>
    </div>
</template>

<script>
// Set up music
import music from '../audio/half-mystery.mp3';
import { Howl } from 'howler';
const musicHowl = new Howl({
  src: [music],
  loop: true,
  autoplay: true,
  volume: 0.025,
});


export default {
    name: "App",
    data() {
        return {
            musicplaying: true,
        }
    },
    methods: {
        toggleMusic() {
            if (this.musicplaying) {
                musicHowl.pause();
            } else {
                musicHowl.play();
            }
            this.musicplaying = !this.musicplaying;
        }
    }
}
</script>

<style lang="less" scoped>

#app {
    width: 100%;
    min-height: 100vh;
    background-color: #8C6E5C;
}
#music-controls {
    position: fixed;
    right: 0;
    top: 0;
    width: 35px;
    cursor: pointer;
    user-select: none;
    padding: 0 5px 5px 5px;
    font-size: 30px;
    background-color: #d6c9ab;
    border-radius: 0 0 0 3px;
    text-align: center;
}

</style>

<style>
  .wrapper {
    background: radial-gradient(transparent, #4A2914);
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0;
  }
</style>
