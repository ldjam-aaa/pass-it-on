<template>
    <div class="root">
        <div class="content" v-if="phrases.length>0">
            <p class="subsubtitle">“{{phrases[0].content}}”</p>
            <div class="messages">
                <p v-on:click="changeIndex(-1)" :class="index <= 0 ? 'icon disabled' : 'icon'">◀</p>
                <p class="subtitle">“{{phrases[index].content}}”</p>
                <p v-on:click="changeIndex(1)" :class="index >= phrases.length-1 ? 'icon disabled' : 'icon'">▶</p>
            </div>
            
            <p class="info">
                This phrase has been passed along by <strong>{{phrases.length-1}}</strong> people!
                <br>
                The original phrase was:  “{{phrases[0].content}}”
                <br>
                The previous phrase was: “{{phrases[phrases.length-2].content}}”
                <br>
                Your phrase was: “{{phrases[phrases.length-1].content}}”

            </p>
            <div class="buttons">
                <button v-on:click="toDashBoard">back to dashboard</button>
                <button v-on:click="playAgain">play again</button>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";

export default {
    name: "Continue",
    methods: {
        changeIndex(delta) {
            const newIndex = this.index+delta;
            if (newIndex < 0 || newIndex >= this.phrases.length) return;
            this.index = newIndex;
        },
        toDashBoard() {
            this.$router.push({ name: 'Dashboard' });
        },
        async playAgain() {
            try {
                const res = await Axios.post("/api/game/getgame");

                const game_id = res.data.game_id;
                this.$router.push({ name: "Start", params: { game_id } });
            } catch (err) {}
        },
    },
    data() {
        return {
            phrases: [],
            index: 0,
            stats: {},
        };
    },
    async mounted() { 
        let res = await Axios.get(`/api/game/one/${this.$route.params.game_id}/getallphrases`); 
        
        if (res.status === 200) { 
            this.phrases = res.data;
            this.index = res.data.length-1;
        }
        console.err(res)

        res = await Axios.get(`/api/game/one/${this.$route.params.game_id}/stats`); 
        
        if (res.status === 200) { 
            this.stats = res.data;
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


.info {
    text-align: left;
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;

    color: #F9EAE1;
}

.buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

button {
    border: none;
    background: transparent;
    font-family: 'Noto Serif JP', serif;

    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    text-decoration-line: underline;

    color: #F9EAE1;
    margin-top: 30px;
    margin-bottom: 50px;
    cursor: pointer;
}

.messages {
    width: 120%;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icon {
    font-size: 60px;
    color: #feb32b;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
}

.disabled {
    color: #5F5F5F;
}
</style>
