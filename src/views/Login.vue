<template>
  <div class="contn">
    <div class="login-form">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <label for="first">Nom d'utilisateur :</label>
        <input
          type="text"
          id="first"
          class="input-text-classic"
          v-model="username"
          required
        />
        <label for="seconde">Mot de passe :</label>
        <input
          type="password"
          id="seconde"
          class="input-text-classic"
          v-model="password"
          required
        />
        <button type="submit" class="btn-classic">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
import { accountService } from "@/_services/account.service";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      accountService
        .login({ name: this.username, password: this.password })
        .then((res) => {
          // console.log(res.data);
          accountService.saveToken(res.data.token);
          const user = accountService.jwtDecodeInfo();
          // console.log(user.roleId);
          if (user.roleId === 2) {
            this.$router.push("public/Profile");
          } else if (user.roleId === 1) {
            this.$router.push("admin/usercrud");
          } else {
            this.$router.push("login");
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
