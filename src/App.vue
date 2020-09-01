<template>
  <v-app>
    <Navbar />
    <v-main class="grey lighten-2">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
</style>
