<template>
  <q-layout view="hHh lp-md lp-lg lp-xl">
    <q-header elevated >
      <q-toolbar>
        <q-toolbar-title>Dietetic Center</q-toolbar-title>
        <nav class="site-nav">
          <router-link to="/"> Connection</router-link> |
          <router-link to="/home"> Home</router-link> |
          <router-link to="/about"> About</router-link> |
          <router-link to="/dashboard"> Dashboard </router-link>
        </nav>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!-- main content goes here -->
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
body {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.site-nav {
  padding: 0px 30px;

  a {
    font-weight: bold;
    color: #FFFFFF;

    &.router-link-exact-active {
      color: #ccd9ed;
    }
  }
}
</style>
