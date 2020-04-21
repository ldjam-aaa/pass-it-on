<template>
    <div class="root">
        <div class="hero">
          <div class="content">
              <p class="title">PASS IT ON</p>
              <p class="subtitle">a game of <s>telephone</s></p>
              <p class="subtitle">international espionage</p>
              <router-link :to="startRoute"><button class="start">start</button></router-link>
          </div>

          <img class="guy" :src="person" width="300" height="400"/>
        </div>
        <div class="links">
            <router-link to="/leaderboard"><button class="link">leaderboard</button></router-link>
            <router-link to="/about"><button class="link">about</button></router-link>
            <a href="https://github.com/ldjam-aaa/pass-it-on" target="_blank" rel="noopener"><button class="link">github</button></a>
        </div>
    </div>
</template>

<script>

import person from '../img/person.png'

export default {
    name: "Home",
    computed: {
        startRoute() {
            if (this.$store.getters.userCreated) {
                return "/dashboard"
            }
            return "/signup"
        },

        person() {
          return person;
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

.hero {
  display: flex;
  flex-direction: row;
}

.content {
    width: 600px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('../img/tape_paper.png');
    background-size: cover;
}

.title {
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 136px;
    text-align: left;
    padding-top: 68px;
    text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
    color: #FEB32B;
    margin: 0%;

}

.subtitle {
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    text-align: left;

    color: #A15C5C;
    margin: 0%;
}

.start {
    margin-top: 20px;
    margin-bottom: 80px;
}

.links {
    display: flex;
    justify-content: space-evenly;
}

button {
    margin-top: 10px;
    width:250px;

    border: none;
    background: transparent;
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 54px;
    text-align: center;
    text-decoration-line: underline;

    color: #0C1221;
    cursor: pointer;
}

.link {
  background-image: url('../img/paper.png');
  background-size: 100% 100%;
  padding: 10px;
}
</style>
