<template>
  <div id="app">
    <div id="nav">
      <!-- 声明式路由 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- 编程式路由 -->
      <button @click="toother">other</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    // 编程式路由
    toother(){
      this.$router.history.push({
        path:'/other'
      })
    }
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
