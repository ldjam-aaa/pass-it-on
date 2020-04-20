<template>
  <div class="root">
    <div class="content">
      <h1>SERVER ERROR</h1>
      <h3>COURIER INTERCEPTED, MISSION ABORTED</h3>
      <div>
        <div class="section">
          Our intelligence servers have encountered an error processing your request and have aborted the mission.
          No credit has been lost.
          Head back to the dashboard and try again.
        </div>
        <div class="links">
          <router-link to="/dashboard">
            <button class="link">back to dashboard</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
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
  font-size: 32px;
  margin: 20px;
  text-align: center;
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
.link {
  border: none;
  background: transparent;
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 54px;
  text-align: center;
  text-decoration-line: underline;
  color: #f9eae1;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>