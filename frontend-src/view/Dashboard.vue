<template>
  <div>TODO: Implement Dashboard</div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      globalStats: null,
      userStats: null,
      error: null
    };
  },
  async mounted() {
    const res = await Axios.get("/api/stats");
    if (res.status === 200) {
      this.globalStats = res.data;
    } else {
      this.error = "No global stats found";
    }

    const userRes = await Axios.get(
      "/api/user/get/" + this.$store.state.user.uuid
    );
    if (userRes.status === 200) {
      this.userStats = userRes.data;
    } else {
      this.error = "No user stats found";
    }
  }
};
</script>

<style lang="less" scoped></style>
