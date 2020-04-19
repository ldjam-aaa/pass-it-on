<template>
  <div class="root">
    <div class="content">
        <div class="prevPrompt subsubtitle">“This is the original prompt”</div>
        <div class="arrow">↓</div>
        <div class="currPrompt subtitle">“This is the modified prompt”</div>

        <p class="subsubtitle rewardPrompt">extra credit awarded:</p>
        <div class="rewards">
            <div class="reward">
                <p class="subsubtitle">Levenshtein Distance</p>
                <p class="subtitle">+300</p>
            </div>
            <div class="reward">
                <p class="subsubtitle">Levenshtein Distance</p>
                <p class="subtitle">+300</p>
            </div>
        </div>
        <p class="subsubtitle">
        headquarters rewards agents with the skill to decode obfuscation
        derive the original message from 3 options for +1000 credits
        </p>
        <p class="subsubtitle">
        <strong>
            failure to decode will result in immediate nullification of communication chain
            no points will be gained
        </strong>
        </p>

        <button>decode</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Results"
};
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
  width: 900px;
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

  color: #feb32b;
  margin: 0%;
}

.subtitle {
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 49px;
  text-align: center;

  color: #f9eae1;

  margin: 0%;
}

.subsubtitle {
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: 200;
  font-size: 26px;
  line-height: 39px;
  text-align: center;

  color: #f9eae1;
  margin: 0;
  margin-top: 20px;
}

.timer {
  font-family: "Nova Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 80px;
  text-align: center;

  color: #feb32b;
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

  color: #feb32b;
}

.arrow {
  font-size: 60px;
  color: #feb32b;
}

button {
  border: none;
  background: transparent;
  font-family: "Noto Serif JP", serif;

  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  text-decoration-line: underline;

  color: #f9eae1;
  margin-top: 30px;
  margin-bottom: 50px;
}

.rewardPrompt {
    margin-top: 50px;
}

.rewards {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 50px;
}

.reward {
    width: 300px;
    display: flex;
    flex-direction: column;

}
</style>
