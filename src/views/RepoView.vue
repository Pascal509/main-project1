<template>
  <div class="col-md-4">
    <router-view></router-view>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui adipisci
      inventore porro labore laborum. Dolores recusandae totam, ullam tempore
      est rem voluptas, accusamus quibusdam corporis reiciendis harum nihil in.
      Velit!
    </p>
  </div>
</template>

<script>
import axios from "axios";
// import { useRoute } from "vue-router";
// import {ref, onBeforeMount} from "vue"
// import repos from "../data.json"

// import SearchRepo from '../components/SearchRepo.vue'

// const repo = ref(null)
// const route = useRoute()
// const {id} = route.params;

// onBeforeMount(() => {
//   repo.value = repos.find(r => r.id === parseInt(id))
// })

export default {
  name: "RepoView",
  components: {
    // SearchRepo
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

<style></style>
