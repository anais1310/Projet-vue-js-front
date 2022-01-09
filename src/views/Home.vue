<template>
  <div class="home">
    <img alt="Fond accueil" src="../assets/fond.png" class="fond img-fluid">
    <br><h1 style="margin-bottom: 265px" v-if="user">Bienvenue {{user.username}}</h1>
    <h1 v-else style="margin-bottom: 250px">Bienvenue</h1>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  data () {
    return {
      user: localStorage.user ? JSON.parse(localStorage.user) : "",
    }
  }
}
</script>

<style>
img{
  width: 10% !important;
}
</style>
