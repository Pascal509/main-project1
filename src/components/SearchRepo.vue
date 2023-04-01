<template>
  <div>
    <h1>All Repositories</h1>
    <input type="text" v-model="search" placeholder="search repos" />
    <div v-for="repo in filteredRepos" :key="repo.id" class="single-repo">
      <h2>{{ repo.name }}</h2>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      repos: [],
      search: "",
    }
  },
  methods: {
  },
  created() {
    this.$http
      .get('https://api.github.com/users/Pascal509/repos')
      .then(function(data) {
        this.repos = data.body.slice(0, 10);
      });
  },
  computed: {
    filteredRepos: function () {
      return this.repos.filter((repo) => {
        return repo.title.match(this.search);
      });
    },
  },
};
</script>


<style>
  .single-repo {
    max-width: 800px;
  }
</style>