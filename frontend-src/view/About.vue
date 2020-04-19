<template>
    <div class="root">
        <h1>ABOUT</h1>
        <h3>LUDEM DARE 46: KEEP IT ALIVE</h3>

        <div>
            <div class="section">
                <p class="subtitle">THE GAME</p>
                <p>This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc. This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc. This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc. This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc. This is where we say nice things about how much fun it was to make this, go into excruciatingly painful detail about the entire process etc.</p>
            </div>
            <div class="section" id="the-team">
                <p class="subtitle">THE TEAM</p>
                <h3 class="author-name">Name</h3> - <a href="https://pio.garykim.dev" rel="noopener">Website link</a>
                <p>Test test 123</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style lang="less" scoped>
.root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    align-items: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 80px;
}
h1 {
    color: #FEB32B;
    font-size: 100px;
    margin: 10px;
    padding: 0;
}
h3{
    color: #F9EAE1;
    font-size: 36px;
    margin: 20px;

    &.author-name {
        color: #FEB32B;
        display: inline-block;
        font-size: 24px;
        margin: 10px 5px 10px 0;
    }
}
p {
    font-size: 18px;
    color: #F9EAE1;
}
.subtitle {
    font-size: 24px;
    font-weight: bold;
    color: #F9EAE1;
}
.section {
    color: #F9EAE1;
}
#the-team {
    a {
        margin-left: 5px;
        color: #c2a2f9;
    }
}
</style>