<template>
  <div class="root">
    <div class="content">
        <div class="prevPrompt subsubtitle">{{this.$route.params.givenPhrase.content}}</div>
        <div class="arrow">↓</div>
        <div class="currPrompt subtitle">{{this.$route.params.phrase}}</div>

        <p class="subsubtitle rewardPrompt">extra credit awarded:</p>
        <div class="rewards">
            <div v-for="(value, key) in points" class="reward">
                <template v-if="value !== 0">
                  <p class="subsubtitle">{{ key }}</p>
                  <p class="subtitle">+{{ value }}</p>
                </template>
            </div>
        </div>
        <p class="subsubtitle">
        headquarters rewards agents with the skill to decode obfuscation
        derive the original message from 3 options for +1000 credits
        </p>
        <p class="subsubtitle">
        <strong>
            failure to decode will result in immediate nullification of communication chain
            no points will be gained
        </strong>
        </p>

        <button @click="decode">decode</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results",
  methods: {
    decode() {
      this.$router.push({name:"Decode", params: this.$route.params})
    },
  },
  computed: {
    points() {
      return this.$route.params.points;
    }
  }
};
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
  max-width: 900px;
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

  color: #feb32b;
  margin: 0%;
}

.subtitle {
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 49px;
  text-align: center;

  color: #f9eae1;

  margin: 0%;
}

.subsubtitle {
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: 200;
  font-size: 26px;
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

.options {
  display: flex;
  width: 90vw;
  justify-content: space-evenly;
}

.option {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  min-height: 150px;
  justify-content: space-between;
}


.arrow {
  font-size: 60px;
  color: #feb32b;
}

button {
  border: none;
  background: transparent;
  font-family: "Noto Serif JP", serif;

  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  text-decoration-line: underline;

  color: #f9eae1;
  margin-top: 30px;
  margin-bottom: 50px;
  cursor: pointer;
}

.rewardPrompt {
    margin-top: 50px;
}

.rewards {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 50px;
}

.reward {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;

}
</style>
