<template>
    <div class="root">
       <div class="content">
            <p class="title">DECODE</p>
            <p class="subtitle">CHOOSE THE TRUE ORIGINAL MESSAGE</p>

            <p class="subsubtitle">INK WILL AUTO-VAPORIZE IN:</p>
            <p class="timer">
                <countdown 
                    :end-time="new Date().getTime() + 60000"
                    v-on:finish="endTimer"
                >
                    <template v-slot:process="time">
                        <span>{{ `${time.timeObj.m}:${time.timeObj.s}` }}</span>
                    </template>
                </countdown>
            </p>

            <p class="subtitle">“{{phrase.content}}”</p>
            <div class="options">
                <div class="option" v-for="option in possible" :key="option">
                    <p class="subsubtitle">{{option}}</p>
                    <button v-on:click="submitDecode(option)">{{['A','B','C','D','E'][possible.indexOf(option)]}}</button>
                </div>
                
            </div>
       </div>
    </div>
</template>

<script>
import Axios from "axios";

import countdown from 'vue-awesome-countdown/src/vue-awesome-countdown.vue'
import { Howl, Howler } from 'howler';
import tick from '../audio/tick.mp3'

const sound = new Howl({
  src: [tick],
  loop: true,
  volume: 0.2
});

export default {
    name: "Decode",
    components: { 
        countdown 
    },
    methods: {
        endTimer() {
            sound.stop();
            this.$router.push({ name: 'Failure', params: { game_id: this.$route.params.game_id } })
        },
        async submitDecode(option){
            const reqBody = {
                phrase: option,
            };
            
            const res = await Axios.post(`/api/game/one/${this.$route.params.game_id}/${this.phrase.id}/submitdecode`, reqBody);
            
            if (res.status === 200 && res.data.correct === true) { 
                sound.stop();
                this.$router.push({ name: 'Success', params: { game_id: this.$route.params.game_id } });
                return;
            }
            sound.stop();
            this.$router.push({ name: 'Failure', params: { game_id: this.$route.params.game_id } });

        },
    },
    data() {
        return {
            possible: [],
            phrase: {
                id: 0,
                content: '',
            },
        };
    },
    async mounted() { 
        sound.play();
        const res = await Axios.get(`/api/game/one/${this.$route.params.game_id}/getdecode`); 
        
        if (res.status === 200) { 
            this.possible = res.data.possible;
            this.phrase = res.data.phrase;
        }
    }

}
</script>

<style lang="less" scoped>
.root {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
}
.content {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 136px;
    text-align: center;

    color: #FEB32B;
    margin: 0%;



}

.subtitle {
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 49px;
    text-align: center;

    color: #F9EAE1;

    margin: 0%;
}

.subsubtitle {
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 39px;
    text-align: center;

    color: #F9EAE1;
    margin: 0;
    margin-top: 20px;

}

.timer {
    font-family: 'Nova Mono', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 80px;
    text-align: center;

    color: #FEB32B;
    margin: 0;
    margin-bottom: 20px;
}

.options {
    display: flex;
    width: 90vw;
    justify-content: space-evenly;
}

.option {
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 150px;
    justify-content: space-between;
}

button {
    border: none;
    background: transparent;
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 95px;
    text-align: center;

    color: #FEB32B;
    cursor: pointer;
}
</style>
