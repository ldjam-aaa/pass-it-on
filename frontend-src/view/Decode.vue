<template>
    <div class="root">
       <div class="content">
            <p class="title">DECODE</p>
            <p class="subtitle">CHOOSE THE TRUE ORIGINAL MESSAGE</p>

            <p class="subsubtitle">INK WILL AUTO-VAPORIZE IN:</p>
            <p class="timer">00:20</p>

            <p class="subtitle">“An extremely fast furry predator leaped across a slothful wolf”</p>
            <div class="options">
                <div class="option">
                    <p class="subsubtitle">“The quick brown fox jumps over the lazy dog”</p>
                    <button>A</button>
                </div>
                <div class="option">
                    <p class="subsubtitle">“The slow round hen flew over the lazy seal”</p>
                    <button>B</button>
                </div>
                <div class="option">
                    <p class="subsubtitle">“The fast brown fox jumps over the tired wolf”</p>
                    <button>C</button>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name: "Decode"
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
    width: 800px;
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

.subsubtitle {
    font-family: 'Noto Serif JP', serif;
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 39px;
    text-align: center;

    color: #F9EAE1;
    margin: 0;
    margin-top: 20px;

}

.timer {
    font-family: 'Nova Mono', monospace;
    font-style: normal;
    font-weight: normal;
    font-size: 70px;
    line-height: 80px;
    text-align: center;

    color: #FEB32B;
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
    width: 400px;
    min-height: 150px;
    justify-content: space-between;
}

button {
    border: none;
    background: transparent;
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 95px;
    text-align: center;

    color: #FEB32B;
}
</style>
