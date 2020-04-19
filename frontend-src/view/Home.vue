<template>
    <div class="root">
        <div class="content">
            <p class="title">PASS IT ON</p>
            <p class="subtitle">a game of <s>telephone</s></p>
            <p class="subtitle">international espionage</p>
            <button class="start">start</button>
        </div>
        <div class="links">
            <button class="link">leaderboard</button>
            <button class="link">about</button>
            <button class="link">github</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home"
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
    width: 700px;
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
    font-weight: 200;
    font-size: 40px;
    line-height: 54px;
    text-align: center;

    color: #F9EAE1;
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

    color: #F9EAE1;

}
</style>
