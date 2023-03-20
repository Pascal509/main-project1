<template>
  <NavBar />
  <div>
    <PaginateRepo />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PaginateRepo from "./PaginateRepo.vue";

export default {
  name: "ProjectView",
  components: {
    NavBar,
    PaginateRepo
  },
};
</script>

<style scoped></style>
