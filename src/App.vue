<template>
  <div>
    <router-link style="margin: 10px" to="/">Pinia</router-link>
    <router-link to="/calculator">Calculator</router-link>
    <router-link style="margin: 10px" to="/example">Vue</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
