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
            <h1>ABOUT</h1>
            <h3>LUDEM DARE 46: KEEP IT ALIVE</h3>
            <div>
                <div class="section">
                    <p class="subtitle">THE GAME</p>
                    <p>This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc. This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc. This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc. This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc. This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc.</p>
                </div>
                <div class="section" id="the-team">
                    <p class="subtitle">THE TEAM</p>
                    <h3 class="author-name">Connie Liu</h3> - <a href="https://connieliu0.github.io/" rel="noopener">https://connieliu0.github.io/</a>
                    <p>Connie is a rising sophomore at Cornell University studying Information Science (User Experience). She helped out with the visual brand and assets of the game.</p>
                    <h3 class="author-name">Ryan Jung</h3> - <a href="https://ryanjung.dev" rel="noopener">https://ryanjung.dev</a>
                    <p>Ryan is a sophomore at Northeastern University studying Computer Science. He works on full-stack web apps and is passionate about computer science education.</p>
                    <h3 class="author-name">Gary Kim</h3> - <a href="https://garykim.dev" rel="noopener">https://garykim.dev</a>
                    <p>Gary has extensive previous experience with Webpack/Babel/VueJS which was used for the frontend and backend in this game. He bootstraped the repo and worked on the API, frontend UI, and managed devops.</p>
                    <h3 class="author-name">Angelina Saliling</h3>
                    <p>Angelina is a rising sophomore at Cornell University studying Computer Science and minoring in philosophy. She is on the software team of CUAUV (Cornell University Underwater Vehicles) and is curious about all things computer science.</p>
                    <h3 class="author-name">Alan Chang</h3> - <a href=" https://tcode2k16.github.io/blog/" rel="noopener"> https://tcode2k16.github.io/blog/</a>
                    <p>Alan is passionate about all things computer science. He maintains a blog on cybersecurity and other CS topics in his free time. He worked on the API backend as well as the frontend UI for this game.</p>
                </div>
            <div>
                <p><a href="/3rdpartylibraries.txt">3rd Party Libraries</a></p>
                <p>Music: "Half Mystery" Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 4.0 License <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">http://creativecommons.org/licenses/by/4.0/</a></p>
            </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="less" scoped>
.root {
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 800px;
  width: 100%;
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: normal;
}
p {
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: normal;
}
h1 {
  font-family: Open Sans Condensed;
  color: #feb32b;
  font-size: 100px;
  margin: 10px;
  padding: 0;
}
h3 {
  color: #f9eae1;
  font-size: 36px;
  margin: 20px;

  &.author-name {
    color: #feb32b;
    display: inline-block;
    font-size: 24px;
    margin: 10px 5px 10px 0;
  }
}
p {
  font-size: 18px;
  color: #f9eae1;
}
.subtitle {
  font-size: 24px;
  font-weight: bold;
  color: #f9eae1;
}
.section {
  color: #f9eae1;
}
a {
  color: #c2a2f9;
}
#the-team {
  a {
    margin-left: 5px;
  }
}
button {
  margin-top: 24px;

  border: none;
  margin-left: 12px;
  background: transparent;
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: left;
  text-decoration-line: underline;

  color: #f9eae1;
  cursor: pointer;
}
</style>
