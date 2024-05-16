<template>
  <div>
    <h1>Page d'accueil</h1>
    <p>Bienvenue sur notre application de gestion communale.</p>
    <p>
      Ici, vous trouverez toutes les informations pertinentes sur votre commune.
    </p>
    <p>Connectez-vous pour accéder à davantage de fonctionnalités.</p>

    <!-- Bouton de connexion -->
    <router-link to="/login">
      <button>Connexion</button>
    </router-link>

    <!-- Bouton d'inscription -->
    <router-link to="/signup">
      <button>Inscription</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Styles spécifiques à la page Home */
</style>
