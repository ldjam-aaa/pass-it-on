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
  <div class="root">
    <div class="content">
        <div class="phrase-box subsubtitle">{{this.$route.params.givenPhrase.content}}</div>
        <div class="arrow">↓</div>
        <div class="phrase-box subtitle">{{this.$route.params.phrase}}</div>

        <p class="subsubtitle rewardPrompt">extra credit awarded:</p>
        <div class="rewards">
            <div v-for="key in Object.keys(points).filter(e => points[e] !== 0)" :key="key" class="reward">
                <p class="subsubtitle">{{ key }}</p>
                <p class="subtitle">+{{ points[key] }}</p>
            </div>
        </div>

        <button @click="decode">decode</button>

        <div class="paper">
          <p class="info">
          headquarters rewards agents with the skill to decode obfuscation
          derive the original message from 3 options for {{ pointsFromDecode }} credits
          </p>
          <p class="info">
              failure to decode will result in immediate nullification of communication chain
              <br/>no points will be gained
          </p>

        </div>

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
    },
    pointsFromDecode() {
      return this.$store.state.config.decodePoints;
    },
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
  font-size: 22px;
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
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  text-decoration-line: underline;

  color: #f9eae1;
  margin-top: 30px;
  margin-bottom: 40px;
  cursor: pointer;
  text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);

}

.rewardPrompt {
    margin-top: 50px;
}

.rewards {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}

.reward {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;

}
.phrase-box {
    padding: 10px 20px 10px 20px;
    background-color: #F9EAE1;
    color: #0C1221;
    border-radius: 5px;
}

.info {
  font-size: 18px;
  color: #0C1221;
  text-align: center;
  margin: 0;
  padding-left: 50px;
  padding-right: 50px;

}

.paper {
    margin: 0;
    text-align: left;
    align-self: flex-start;
    font-family: 'Noto Serif JP', serif;
    font-size: 18px;
    line-height: 31px;
    font-weight: 400;
    background-image: url('../img/notebook.png');
    padding-top: 29px;
    padding-bottom: 5px;
    color: #0C1221;

    width: 100% ;
}

</style>
