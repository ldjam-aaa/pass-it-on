<template>
  <div>
    <div class="overlay">
      <p class="title">INK WILL AUTO-VAPORIZE IN:</p>
      <div class="timer">
        <countdown
          :end-time="new Date().getTime() + 60000"
          v-on:finish="endTimer"
        >
          <template v-slot:process="time">
            <span>{{ `${time.timeObj.m}:${time.timeObj.s}` }}</span>
          </template>
        </countdown>
      </div>
    </div>
    <div class="root">
      <div class="content">
        <p class="title prompt">DECODED MESSAGE:</p>
        <div class="paper">
          <p class="title input-phrase">{{givenPhrase.content}}</p>
        </div>
        
        <div class="subtitle">Rephrase this message in no less than {{this.givenPhrase.content.trim().split(" ").length}} words</div>
        <form @submit.prevent="submitPhrase">
          <input type="text" class="phrase" :placeholder="givenPhrase.content" v-model="phrase"/>
          <input type="submit" class="confirm" :value=" isValidPhrase? 'confirm message' : 'message invalid'" />
        </form>
        <p class="info">
          <strong>additional espionage credit will be awarded to agents who</strong>
          <br>
          - use as few similar words as possible
          <br>
          - use no identical words
          <br>
          - use exactly as many words as given
          <br>
          - use another language
          </p>
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
  name: "Start",
  components: {
    countdown
  },
  methods: {
    endTimer() {
      sound.stop()
      this.$router.push({ name: 'Failure', params: { game_id: this.$route.params.game_id } })
    },
    async submitPhrase() {
      if (!this.isValidPhrase) {
        return;
      }
      const reqBody = {
        phrase: this.phrase
      };

      try {
        const res = await Axios.post(`/api/game/one/${this.$route.params.game_id}/submitphrase`, reqBody);
        if (res.status !== 200) {
          throw new Error();
        }
        sound.stop()
        this.$router.push({ name: 'Results', params: { game_id: this.$route.params.game_id, givenPhrase: this.givenPhrase, phrase: this.phrase, points: res.data.score } })
      } catch (err) {
        sound.stop()
        this.$router.push({ name: 'Failure', params: { game_id: this.$route.params.game_id } })
      }

    }
  },
  computed: {
    isValidPhrase: function () {
      return this.phrase.trim().split(" ").length >= this.givenPhrase.content.trim().split(" ").length;
    }
  },
  data() {
    return {
      phrase: "",
      givenPhrase: {content: "", id: -1}
    };
  },
  async mounted() {
    sound.play()

    const res = await Axios.get(`/api/game/one/${this.$route.params.game_id}/getphrase`);
    if (res.status === 200) {
      this.givenPhrase = res.data.phrase;
    }
  },
};
</script>

<style lang="less" scoped>
.overlay {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  right: 40px;
  align-items: flex-end;
}

.title {
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 39px;
  text-align: center;
  color: #f9eae1;
  margin: 0;
  margin-top: 20px;
}
.input-phrase {
  padding-left: 70px;
  padding-right: 70px;
  margin: 0px;
  font-weight: 600;
  color: #0C1221;

}
.paper {
  margin: 30px;
  background-image: url('../img/paper_wide.png');
  background-size:100% 100%;

  padding: 30px;
  padding-right: 0px;
  color: #0C1221;

}

.timer {
  font-family: "Nova Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 80px;
  text-align: center;

  color: #feb32b;
  margin: 0;
  margin-bottom: 20px;
}

.root {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}
.content {
    padding-top: 50px;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.prompt {
    align-self: flex-start;
}

.subtitle {
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #F9EAE1;

}

.info {
    margin: 0;
    text-align: left;
    align-self: flex-start;
    font-family: 'Noto Serif JP', serif;
    font-size: 18px;
    line-height: 31px;
    font-weight: 400;
    background-image: url('../img/notebook.png');
    padding-left: 80px;
    padding-top: 29px;
    padding-bottom: 5px;
    color: #0C1221;

    width: calc(100% - 80px);
}

.phrase {
    background: #F9EAE1;
    border: 1px solid #F9EAE1;
    box-sizing: border-box;
    border-radius: 5px;
    height: 60px;
    width: 100%;

    text-align: center;
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: #0C1221;

    margin: 0;
    margin-top: 50px;

}

form {
  display: flex;
  flex-direction: column;
  width: 100%
}

.confirm {
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
    margin: 30px auto 30px auto;
    cursor: pointer;
}
</style>
