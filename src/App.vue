<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/Nav.vue";

export default {
  name: 'App',
  components: {
    NavBar
  },
  beforeCreate() {

  }
};
</script>
