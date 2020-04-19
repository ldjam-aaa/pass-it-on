<template>
    <div class="root">
       <div class="content">
           <p class="title">FAILURE</p>
           <p class="subtitle">ALL SUBSEQUENT TRANSMISSIONS IN HIGH RISK</p>
           <p class="subtitle">MESSAGE PERMANENTLY DESTROYED</p>
           <button class="view">view mission summary</button>
       </div>
    </div>
</template>

<script>
export default {
    name: "Failure"
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


button {
    margin-top: 130px;

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
