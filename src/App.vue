<template>
  <div id="app">
    <header>
      <div class="px-3 py-2 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a>

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <router-link to="/" class="nav-link text-white">Home</router-link>
              </li>
              <li>
                <router-link to="/categories" class="nav-link text-white">Catégories</router-link>
              </li>
              <li>
                <router-link to="/messages" class="nav-link text-white">Messages</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-3 py-2 border-bottom">
        <div class="container d-flex flex-wrap justify-content-center">
          <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
<!--            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">-->
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-info text-dark me-2" @click="deconnexionU" v-if="user">Déconnexion</button>
            <router-link to="/connexion" class="nav-link text-white" v-else>
              <button type="button" class="btn btn-light text-dark me-2">Connexion</button>
            </router-link>
          </div>
        </div>
      </div>
    </header>
     <router-view/>

    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-dark">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <span class="text-white">© 2021 - LP DEV</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import {deconnexionUser} from "./api/authentication";

export default {
  name: 'App',
  data: () => {
    return {
      user: JSON.parse(localStorage.user),
    }
  },
  computed: {

  },
  methods: {
    deconnexionU : async function(){
      await deconnexionUser(this.email,this.password);
    },
  }
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

li a:hover{
  color: #5bc0de !important;
}

.text-end{
  display: flex !important;
}

</style>