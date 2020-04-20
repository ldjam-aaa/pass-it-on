<template>
    <div class="root">
       <div class="content">
           <p class="title">SUCCESS</p>
           <p class="subtitle">SEMANTIC PRESERVATION CONFIRMED</p>
           <p class="subtitle">TRANSMISSION WILL CONTINUE</p>
           <p class="score">+100000 CREDITS</p>
           <button class="view" v-on:click="goSummary">view mission summary</button>
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
