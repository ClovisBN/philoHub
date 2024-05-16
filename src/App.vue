<template>
  <div class="mainofmain">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "inter";
  src: url("./public/Inter/static/Inter-Medium.ttf");
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: inter;
  text-decoration: none;
}

body {
  -webkit-font-smoothing: antialiased;
}

html {
  background-color: black;
}

html {
  font-size: 16px;
}
@media (min-width: 768px) {
  html {
    font-size: 18px;
  }
  .sidebar {
    height: 76px;
  }
}
@media (min-width: 1024px) {
  html {
    font-size: 19px;
  }
}
@media (min-width: 1280px) {
  html {
    font-size: 20px;
  }
}
</style>
