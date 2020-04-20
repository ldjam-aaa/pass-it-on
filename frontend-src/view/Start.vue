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
        <p class="title">{{this.givenPhrase.content}}</p>
        <div class="subtitle">Rephrase this message in no less than 7 words</div>
        <input type="text" class="phrase" placeholder="This is the phrase that you will be writing" v-model="phrase"/>
        <button class="confirm" v-on:click="submitPhrase" :disabled="!isValidPhrase">confirm message</button>
        <p class="subtitle info">
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

export default {
  name: "Start",
  components: {
    countdown
  },
  methods: {
    endTimer() {
      this.$router.push({ name: 'Failure', params: { game_id: this.$route.params.game_id } })
    },
    async submitPhrase() {
      const reqBody = {
        phrase: this.phrase
      }

      try {
        const res = await Axios.post(`/api/game/one/${this.$route.params.game_id}/submitphrase`, reqBody);
        this.$router.push({ name: 'Results', params: { game_id: this.$route.params.game_id, givenPhrase: this.givenPhrase, phrase: this.phrase } })
      } catch (err) {
        this.$router.push({ name: 'Failure', params: { game_id: this.$route.params.game_id } })
      }

    }
  },
  computed: {
    isValidPhrase: function () { 
      return this.phrase.split(" ").length >= this.givenPhrase.content.split(" ").length;
    }
  },
  data() { 
    return { 
      phrase: "",
      givenPhrase: {content: "", id: -1}
    }; 
  }, 
  async mounted() { 
 
    const res = await Axios.get(`/api/game/one/${this.$route.params.game_id}/getphrase`); 
    if (res.status === 200) { 
      this.givenPhrase = res.data.phrase;
    }
  }


};
</script>

<style lang="less" scoped>
.overlay {
  width: 600px;
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
  font-size: 30px;
  line-height: 39px;
  text-align: center;

  color: #f9eae1;
  margin: 0;
  margin-top: 20px;
}

.timer {
  font-family: "Nova Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 80px;
  text-align: center;

  color: #feb32b;
  margin: 0;
  margin-bottom: 20px;
}

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
    text-align: left;
    align-self: flex-start;
    font-weight: 200;
}


.phrase {
    background: transparent;
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
    color: #F9EAE1;

    margin: 0;
    margin-top: 50px;

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
</style>
