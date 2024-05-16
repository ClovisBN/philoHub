<template>
  <div class="contn">
    <div class="signup-form">
      <h1>Inscription</h1>
      <form @submit.prevent="signup">
        <label for="username">Nom d'utilisateur :</label>
        <input
          type="text"
          class="input-text-classic"
          v-model="username"
          required
        />
        <label for="password">Mot de passe :</label>
        <input
          type="password"
          class="input-text-classic"
          v-model="password"
          required
        />
        <button type="submit" class="btn-classic">S'inscrire</button>
      </form>
    </div>
  </div>
</template>

<script>
import { accountService } from "@/_services/account.service";

export default {
  name: "SignupView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signup() {
      accountService
        .signup({ name: this.username, password: this.password })
        .then((response) => {
          console.log("Utilisateur inscrit avec succès:", response.data.user);
          // Redirection vers la page de connexion après l'inscription
          this.$router.push("/login");
        })
        .catch((error) => {
          console.error("Erreur lors de l'inscription:", error);
          // Gérer les erreurs d'inscription ici
        });
    },
  },
};
</script>

<style scoped></style>
