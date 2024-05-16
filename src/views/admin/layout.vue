<template>
  <div class="public">
    <adminSideBar v-if="authenticated" />
    <Router-View />
  </div>
</template>

<script>
import adminSideBar from "@/components/admin/sideBar.vue";

export default {
  name: "AdminLayout",
  components: {
    adminSideBar,
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
