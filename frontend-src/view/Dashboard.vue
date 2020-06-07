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
  <div>
    <div class="navigation">
      <button class="home" v-on:click="goHome">Go Home</button>
    </div>
    <div class="root">
      <div class="content">
        <div class="header">
          <p>{{ userStats ? userStats.username : "LOOKS LIKE YOU AREN'T SIGNED IN" }}</p>
        </div>
        <div class="stats">
          <div class="global-stats">
            <div class="stat-box">
              <p>GLOBAL OBFUSCATIONS</p>
              <p>{{ globalStats ? globalStats.numberOfGames : 0 }}</p>
            </div>
            <div class="stat-box">
              <p>GLOBAL ACTIVE CHANNELS</p>
              <p>{{ globalStats ? globalStats.numberOfActiveGames : 0 }}</p>
            </div>
          </div>
          <div class="user-stats">
            <div class="stat-box">
              <p>YOUR OBFUSCATIONS</p>
              <p>{{ userStats ? userStats.numberOfPhrases : 0 }}</p>
            </div>
            <div class="stat-box">
              <p>YOUR ACTIVE CHANNELS</p>
              <p>{{ userStats ? userStats.numberOfActiveGames : 0 }}</p>
            </div>
            <div class="stat-box">
              <p>ESPIONAGE CREDIT</p>
              <p>{{ userStats ? userStats.score : 0 }}</p>
            </div>
          </div>
        </div>

        <button @click="startGame" :disabled="loadingGame">pass on a new message</button>
        <hr>
      </div>

      <div class="games" v-if="userStats">
        <div class="game" v-for="game in userStats.games.filter(e => e.id in gamePhrases)" :key="game.id">
          <h1>"{{gamePhrases[game.id][gamePhraseIdx[game.id]].content}}"</h1>
          <div class="timeline">
            <!-- <div  class="timeline"> -->
            <p v-on:click="setIndex(game.id,gamePhrases[game.id].map(e => e.id).indexOf(phrase.id))" v-for="phrase in gamePhrases[game.id]" :class="gamePhrases[game.id][gamePhraseIdx[game.id]].id === phrase.id ? 'icon' : 'icon disabled'" :key="phrase.id">⬤</p>
            <!-- </div> -->
          </div>
          <p class="info">
            This phrase has been passed along by <strong>{{gamePhrases[game.id].length-1}}</strong> people!
            <br><br>
            The original phrase was:  <strong>“{{gamePhrases[game.id][0].content}}”</strong>
            <br>
            The latest phrase was: <strong>“{{gamePhrases[game.id][gamePhrases[game.id].length-1].content}}”</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Dashboard",
  data() {
    return {
      globalStats: null,
      userStats: null,
      error: null,
      loadingGame: false,
      gamePhrases: {},
      gamePhraseIdx: {},
    };
  },
  methods: {
    setIndex(id, index) {
      this.gamePhraseIdx[id] = index;
    },
    async startGame() {
      this.loadingGame = true;
      try {
        const res = await Axios.post("/api/game/getgame");
        this.loadingGame = false;

        const game_id = res.data.game_id;
        this.$router.push({ name: "Start", params: { game_id } });
      } catch (err) {}
    },
    goHome() {
        this.$router.push({ name: 'Home' });
    }
  },
  async mounted() {
    const res = await Axios.get("/api/stats");
    if (res.status === 200) {
      this.globalStats = res.data;
    } else {
      this.error = "No global stats found";
    }

    const userRes = await Axios.get(
      "/api/user/get/" + this.$store.state.user.uuid
    );
    if (userRes.status === 200) {
      this.userStats = userRes.data;
    } else {
      this.error = "No user stats found";
    }

    if (this.userStats.games) {
      const ids = this.userStats.games.map(e => e.id);
      for (const id of ids) {
        const gameRes = await Axios.get(
          "/api/game/one/" + id + '/getallphrases'
        );
        // this.gamePhrases[id] = gameRes.data;
        gameRes.data = gameRes.data.slice(-10);
        this.$set(this.gamePhrases, id, gameRes.data);
        this.$set(this.gamePhraseIdx, id, gameRes.data.length-1);
      }
    }


  }
};
</script>
<style lang="less" scoped>
.home {
  margin-top: 0;
}

.root {
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  font-family: "Noto Serif JP", serif;
}
.header {
  color: white;
  font-family: Open Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin: 0 0 24px 0;
  padding-top: 24px;
}
.stats {
  font-family: Open Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  text-align: center;

  color: #feb32b;
  margin: 0%;

  @media (max-width: 1200px) {
    font-size: 24px;
  }
}
.global-stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.user-stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.stat-box {
  margin: 12px;
}
p {
  margin: 0;
  padding: 0;
}
button {
  margin-top: 10px;

  border: none;
  background: transparent;
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: 200;
  font-size: 38px;
  line-height: 55px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;

  color: #f9eae1;
  cursor: pointer;
}
.icon {
    font-size: 40px;
    color: #feb32b;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 15px;
    cursor: pointer;
}

.disabled {
    color: #F9EAE1;
}
.timeline {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: url('../img/traintrack.png');
  // background: url('../img/traintrack.png') no-repeat center center fixed;
  // background-size: cover;
  // object-fit: cover;
  background-position: center;
  width: 100%;
  user-select: none;
}
.games {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 800px;
  width: 100%;
  font-family: "Noto Serif JP", serif;

}
.game {
  margin-top: 75px;
  margin-bottom: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    font-family: "Noto Serif JP", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;

    color: #F9EAE1;
  }
  .info {
    font-family: "Noto Serif JP", serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;

    color: #F9EAE1;
    text-align: left;
    width: 100%;
  }
}

hr {
  margin-top: 100px;

  width: 800px;
  max-width: 95vw;
  overflow: hidden;
  align-self: center;

}

button {
    margin-top: 24px;

    border: none;
    margin-left: 12px;
    background: transparent;
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: left;
    text-decoration-line: underline;

    color: #F9EAE1;
    cursor: pointer;

}
</style>
