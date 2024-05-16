<template>
  <div class="public">
    <publicSideBar v-if="authenticated" />
    <Router-View />
  </div>
</template>

<script>
import publicSideBar from "@/components/public/SideBar.vue";

export default {
  name: "PublicLayout",
  components: {
    publicSideBar,
  },
  data() {
    return {
      authenticated: false, // Initialise à false au début
    };
  },
  created() {
    this.checkAuthentication(); // Vérifie l'authentification lorsque le composant est créé
  },
  methods: {
    checkAuthentication() {
      const token = localStorage.getItem("token");
      this.authenticated = !!token;
    },
  },
  watch: {
    // Surveille les changements dans le localStorage
    $route() {
      this.checkAuthentication();
    },
  },
};
</script>

<style scoped>
.public {
  width: 100%;
}
</style>
