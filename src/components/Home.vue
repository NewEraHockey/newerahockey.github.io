<template>
  <div>
    <h3> Woodhouse App Contents</h3>
    <br>
    <div class="team" v-for="team in teams" :key="team" @click="showTeamQuiz(team)">{{team}}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  data: () => ({
    // possibly move to file
    teams: [
      "Kyle and Lisa",
      "Bryan and Brit",
      "Paul and Laurel",
      "Alysa and Cody"
    ],
  }),
  methods: {
    showTeamQuiz(team) {
      console.log(team);
      // this.$router.push({ name: 'quiz'})
      this.$router.push({ name: "quiz", params: { team: team } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.team {
  margin:auto;
  margin-bottom:10px;
  font-size:15px;
  background:grey;
  width:200px;
  color:white;
  border-radius: 5px;
  height: 40px;
  line-height: 40px; /* same as height! */
  font-weight: bold;
}
.team:hover {
  background-color: darkblue;
}
</style>
