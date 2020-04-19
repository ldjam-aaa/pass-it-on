<template>
    <div class="root">
        <h1>TOP RANKED AGENTS</h1>
        <h3>OUR BEST AND BRIGHTEST SPIES</h3>
        <table>
            <tr>
                <th>Rank</th>
                <th>Player Name</th>
                <th>Score</th>
            </tr>
            <template v-if="players.length === 0">
                <tr >
                    <td colspan="3">No agents are currently in the database.</td>
                </tr>
                <tr>
                    <td colspan="3">Become the first and proudly serve our agency!</td>
                </tr>
            </template>
            <tr v-for="(player, i) in players" :key="i">
                <td>{{ i + 1 }}</td>
                <td>{{ player.username }}</td>
                <td>{{ player.score }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: "Leaderboard",
    data() {
        return {
            players: [],
        };
    },
    async mounted() {
        const res = await Axios.get('/api/user/leaderboard');
        if (res.status === 200) {
            //this.players = res.data;
        }
    },
}
</script>

<style lang="less" scoped>
.root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    align-items: center;
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
}
table {
    color: #F9EAE1;
    font-size: 24px;

    th {
        padding: 0 60px 20px 0;
    }
}
</style>
