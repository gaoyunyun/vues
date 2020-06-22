<template>
    <div class="center">
        <Header></Header>
        <h2 class="nav">热门推荐</h2>
    </div>
</template>

<script>
    import Header from './header/Header.vue' 
    export default {
        components:{
               Header
        }
            
    }
</script>

<style lang="scss" scoped>
.nav{
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 12px;
}
</style>