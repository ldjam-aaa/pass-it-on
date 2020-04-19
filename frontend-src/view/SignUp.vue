<template>
  <div class="root">
    <form @submit.prevent="submit" class="form">
      <label for="username" class="title">ENTER YOUR CODENAME</label>
      <input
        v-model="username"
        type="text"
        id="username"
        class="input"
        placeholder="randomPlayer42"
      />
      <p class="note">
        Note that your your codename will be viewed by other spies, do
        <i>not</i> reveal any personal information.
      </p>
      <input type="submit" class="submit" value="Submit" :disabled="loading" />
    </form>
  </div>
</template>

<script>
import Axios from "axios";

import { headers } from "../apiconfig";

export default {
  name: "SignUp",
  data() {
    return {
      username: this.$store.state.user.name,
      loading: false
    };
  },
  computed: {
    userCreated() {
      return this.$store.getters.userCreated;
    },
    createdUsername() {
      return this.$store.state.user.username;
    }
  },
  methods: {
    async submit() {
      this.loading = true;
      const res = await Axios.post(
        `/api/user/create`,
        {
          username: this.username
        },
        {
          headers
        }
      );
      const user = {
        username: res.data.username,
        uuid: res.data.uuid
      };
      this.$store.commit("user", user);
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style lang="less" scoped>
.root {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
}

.form {
  width: 700px;
  display: flex;
  flex-direction: column;
}

.title {
  font-family: Open Sans Condensed;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
  color: #feb32b;
  width: 100%;
}

.input {
  background: transparent;
  border: 1px solid #f9eae1;
  box-sizing: border-box;
  border-radius: 5px;
  height: 60px;
  width: 100%;

  text-align: center;
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: #f9eae1;

  margin-bottom: 20px;
  margin-top: 20px;
}

.note {
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;

  color: #f9eae1;
  overflow-wrap: break-word;
  margin: 0%;
}

.submit {
  align-self: center;
  background: transparent;
  border: none;
  font-family: "Noto Serif JP", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;

  color: #f9eae1;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
}
</style>
