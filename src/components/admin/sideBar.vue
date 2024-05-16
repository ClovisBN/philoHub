<template>
  <nav class="navbar_container">
    <div class="navbar_navbar">
      <h1 class="navbar_logoContainer">PhiloHub</h1>
      <div
        class="navbar_navigation"
        v-for="(route, name) in routes"
        :key="name"
      >
        <router-link :to="route.path" class="sidebar-link">{{
          name
        }}</router-link>
        <a @click="logout" class="sidebar-link">Déconnexion</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "adminSideBar",
  data() {
    return {
      routes: {
        usercrud: { path: "usercrud" },
      },
    };
  },
  methods: {
    logout() {
      // Récupérer le token JWT depuis le stockage local
      const token = localStorage.getItem("token");

      // Vérifier si le token existe
      if (token) {
        // Envoyer une requête au serveur pour invalider le token (optionnel)

        // Supprimer le token du stockage local
        localStorage.removeItem("token");

        // Rediriger l'utilisateur vers la page de connexion
        this.$router.push("/login");
      } else {
        console.error("Aucun token JWT trouvé dans le stockage local.");
      }
    },
  },
};
</script>

<style scoped>
.navbar_container {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px 16px 0 16px;
  overscroll-behavior: contain;
  transform: translateX(-50%);
}

.navbar_navbar {
  display: flex;
  padding: 16px 32px;

  justify-content: center;
  width: 100%;
  max-width: 1205px;
  background: linear-gradient(
    137deg,
    rgba(17, 18, 20, 0.75) 4.87%,
    rgba(12, 13, 15, 0.9) 75.88%
  );
  backdrop-filter: blur(5px);
  border: 1px solid hsla(0, 0%, 100%, 0.06);
  border-radius: 16px;
  box-shadow: inset 0 1px 1px 0 hsla(0, 0%, 100%, 0.15);
  transition: height 0.3s ease, transform 0.3s ease;
  transform: translateZ(0);
  will-change: height, transform;
}

.navbar_logoContainer {
  font-weight: bolder;
  text-align: center;
  font-size: 1rem;
  color: #e6e6e6;
  position: absolute;
  top: 50%;
  left: 32px;
  justify-content: center;
  width: auto;
  transform: translateY(-50%);
}

.navbar_navigation {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}

.sidebar-link {
  padding: 12px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: #9c9c9d;
  letter-spacing: 0.2px;
  white-space: nowrap;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
}

.sidebar-link:hover {
  color: #fff;
}
</style>
