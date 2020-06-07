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
          <h1>TOP RANKED AGENTS</h1>
          <h3>OUR BEST AND BRIGHTEST SPIES</h3>
          <table>
          <tr>
              <th>Rank</th>
              <th>Player Name</th>
              <th>Score</th>
          </tr>
          <template v-if="players.length === 0">
              <tr>
              <td colspan="3">No agents are currently in the database.</td>
              </tr>
              <tr>
              <td colspan="3">Become the first and proudly serve our agency!</td>
              </tr>
          </template>
          <tr v-for="(player, i) in players" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ player.username }}</td>
              <td>{{ player.score }}</td>
          </tr>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Leaderboard",
  data() {
    return {
      players: []
    };
  },
  methods: {
    goHome() {
        this.$router.push({ name: 'Home' });
    }
  },
  async mounted() {
    const res = await Axios.get("/api/user/leaderboard");
    if (res.status === 200) {
      this.players = res.data;
    }
  }
};
</script>

<style lang="less" scoped>
.root {
    display: flex;
    justify-content: center;
    min-height: 100vh;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  max-width: 800px;
  width: 100%;
  font-family: 'Noto Serif JP', serif;
}
h1 {
  color: #feb32b;
  font-size: 100px;
  margin: 10px;
  padding: 0;
  overflow: visible;
  max-width: 100vw;
  width: 125%;
  text-align: center;
//   white-space: nowrap;
  font-family: Open Sans Condensed;
  overflow-wrap: break-word;
}
h3 {
  color: #f9eae1;
  font-size: 36px;
  margin: 20px;
}
table {
  color: #f9eae1;
  font-size: 24px;

  th {
    padding: 0 60px 20px 0;
  }
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
