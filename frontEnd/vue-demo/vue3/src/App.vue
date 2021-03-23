<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/tengxun">tengxun</router-link> |
    <router-link to="/baidu">baidu</router-link> |
    <router-link to="/gaode">gaode</router-link> |
    <router-link to="/gaode3D">gaode3D</router-link> |
    <router-link to="/Ademos">Ademos</router-link> |
    <router-link to="/supermap">supermap</router-link> |
    <router-link to="/element-NavMenu">element-NavMenu</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
