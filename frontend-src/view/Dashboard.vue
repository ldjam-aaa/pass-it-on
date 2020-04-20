<template>
  <div>
    <div class="header">
      <p>{{ userStats ? userStats.username : "LOOKS LIKE YOU AREN'T SIGNED IN" }}</p>
    </div>
    <div class="stats">
      <div class="global-stats">
        <div class="stat-box">
          <p>GLOBAL OBFUSCATIONS</p>
          <p> {{ globalStats ? globalStats.numberOfGames : 0 }}</p>
        </div>
        <div class="stat-box">
          <p>GLOBAL ACTIVE CHANNELS</p>
          <p> {{ globalStats ? globalStats.numberOfActiveGames : 0 }}</p>
        </div>
      </div>
      <div class="user-stats">
        <div class="stat-box">
          <p>YOUR OBFUSCATIONS</p>
          <p>{{ userStats ? userStats.numberOfPhrases : 0 }}</p>
        </div>
        <div class="stat-box">
          <p>YOUR ACTIVE CHANNELS</p>
          <p> {{ userStats ? userStats.numberOfActiveGames : 0 }}</p>
        </div>
        <div class="stat-box">
          <p>ESPIONAGE CREDIT</p>
          <p>{{ userStats ? userStats.score : 0 }}</p>
        </div>
      </div>
    </div>

    <button @click="startGame" :disabled="loadingGame">Start Game</button>
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

    };
  },
  methods: {
    async startGame() {
      this.loadingGame = true;
      try {
        const game = await Axios.post("/api/game/create");
        console.log(game)
        this.loadingGame = false;
        const id = game.id;
      } catch (err) {
        console.error(err);

      }

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
  }
};
</script>
<style lang="less" scoped>
.header{
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

  color: #FEB32B;
  margin: 0%;

  @media (max-width: 1200px){
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
</style>
