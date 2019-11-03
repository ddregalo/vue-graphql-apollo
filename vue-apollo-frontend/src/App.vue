<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <h1>StarWars Characters</h1>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px 30px 15px 30px;;
  background-image: url("https://media.wired.com/photos/5cd5df1f2948ca2e63b090f0/master/w_1164,c_limit/01_SPoW_051119.jpg");
  
  a {
    font-weight: bold;
    color: #c7e3ff;
    &.router-link-exact-active {
      color: rgb(0, 177, 177);
    }
  }
  
  
  h1 {
    text-transform: uppercase;
    padding-bottom: 0;
    color: #d1e8ff;
  }
}
</style>
