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
        <div class="wrapper">
            <div class="content">
                <p class="title">SUCCESS</p>
                <p class="subtitle">SEMANTIC PRESERVATION CONFIRMED</p>
                <p class="subtitle">TRANSMISSION WILL CONTINUE</p>
                <p class="score">{{ decodePoints }} CREDITS</p>
                <button class="view" v-on:click="goSummary">view mission summary</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Success",
    methods: {
        goSummary() {
            this.$router.push({ name: 'Continue', params: { game_id: this.$route.params.game_id } });
        }
    },
    computed: {
        decodePoints() {
            return this.$store.state.config.decodePoints;
        },
    },
}
</script>

<style lang="less" scoped>
.root {
    background-image: url("../img/success.jpg");
    background-size: cover;
    min-height: 100vh;
}
.wrapper {
    background-color: rgba(140, 110, 92, 0.9);
    width: 100%;
    height: 100%;
    margin: 0;
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
.score {
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 68px;
    text-align: center;
    color: #FEB32B;
    margin-top: 60px;
    margin-bottom: 60px;
}
button {
    margin-top: 10px;
    border: none;
    background: transparent;
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 54px;
    text-align: center;
    text-decoration-line: underline;
    color: #F9EAE1;
    cursor: pointer;
}
</style>
