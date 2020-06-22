<template>
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/about">排行榜</router-link>
      <router-link to="/about">全部分类</router-link>
    </div>
</template>

<script>

    export default {
    }
</script>

<style lang="scss" scoped>

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