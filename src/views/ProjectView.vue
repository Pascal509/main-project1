<template>
  <div>
    <NavBar />
    <!-- <router-link to="/paginate-repo">Search repo</router-link> -->
    <router-view></router-view>
    <div class="mb-6">
      <section class="hero is-medium is-primary is-bold mb-6">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Get GitHub Repositories</h1>
            <h2 class="subtitle">using Vue JS, REST API &amp; Bulma</h2>
          </div>
        </div>
      </section>
      <div class="container">
        <!-- <SearchRepo /> -->
        <!-- <br /> -->
        <div class="table-container">
          <table class="table is-bordered is-striped is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>URL</th>
                <th>Language</th>
                <th>Login</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="repo in repos" v-bind:key="repo.id">
                <router-link to="`/${repo.html_url}`"><td>{{ repo.id }}</td></router-link>
                <td>{{ repo.name }}</td>
                <td>{{ repo.html_url }}</td>
                <td>{{ repo.language }}</td>
                <td>{{ repo.owner.login }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";
// import RepoView from "./RepoView.vue"

export default {
  name: "ProjectView",
  components: {
    NavBar, 
    // RepoView
  },
  data() {
    return {
      repos: null,
    };
  },
  created: function () {
    axios
      .get("https://api.github.com/users/Pascal509/repos")
      .then((response) => {
        this.repos = response.data;
      });
  },
};
</script>

<style scoped>
body {
  font: 15px/1.8 "Poppins", sans-serif !important;
}

.table td,
.table th {
  padding: 20px !important;
}
</style>
