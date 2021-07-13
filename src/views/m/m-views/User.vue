<template>
  <div>
   <h1>user</h1>
   <h1>user</h1>
   <h1>user</h1>
   <h1>user</h1>
   <h1>user</h1>
   <h1>user</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "User",
  computed: {
    //解构
    ...mapState(["count"]),
  },
};
</script>

<style scoped></style>
