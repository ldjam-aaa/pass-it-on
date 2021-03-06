<!--
 - Copyright 2020 The Pass It On Authors
 -
 - Licensed under the Apache License, Version 2.0 (the "License");
 - you may not use this file except in compliance with the License.
 - You may obtain a copy of the License at
 -
 -     http://www.apache.org/licenses/LICENSE-2.0
 -
 - Unless required by applicable law or agreed to in writing, software
 - distributed under the License is distributed on an "AS IS" BASIS,
 - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 - See the License for the specific language governing permissions and
 - limitations under the License.
 -->

<template>
    <div id="app" :class="{ darker: !enableGradient }">
        <div id="music-controls" @click="toggleMusic">
          <div v-if="musicplaying" title="Pause music">&#128266;</div>
          <div v-else title="Resume music">&#128264;</div>
        </div>
        <div :class="{ nogradient: !enableGradient, wrapper: true }">
            <router-view />
        </div>
    </div>
</template>

<script>
// Set up music
import music from '../audio/half-mystery.mp3';
import { Howl } from 'howler';
import {disableGradientList} from "../router";
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
            enableGradient: true,
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
    },
    mounted() {
        this.$router.afterEach(to => {
            this.enableGradient = !disableGradientList.includes(to.name);
        });
    },
}
</script>

<style lang="less" scoped>

#app {
    width: 100%;
    min-height: 100vh;
    background-color: #8C6E5C;

    &.darker {
        background-color: #583723;
    }
}
#music-controls {
    position: fixed;
    right: 0;
    top: 0;
    width: 60px;
    cursor: pointer;
    user-select: none;
    padding: 0 5px 5px 5px;
    font-size: 30px;
    background-color: #d6c9ab;
    border-radius: 0 0 0 3px;
    text-align: center;
}

</style>

<style lang="less">
.wrapper {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0;
    background: radial-gradient(transparent, #4A2914);

    &.nogradient {
        background: initial;
        background-color: #8C6E5C;
    }
}
</style>
