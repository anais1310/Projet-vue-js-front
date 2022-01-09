<template>
  <div class="card">
    <br><h1>Connexion</h1><br>
    <div class="form-group">
      <input v-model="email" class="form-control" type="text" placeholder="Adresse mail"/>
    </div><br>
    <div class="form-group">
      <input v-model="password" class="form-control" type="password" placeholder="Mot de passe"/>
    </div>
    <div><br>
      <button @click="userConnexion" class="btn btn-info" style="margin-bottom: 255px;">Se connecter</button>
    </div>
  </div>
</template>

<script>
import {connexionUser} from '../api/authentication'

export default {
  name: "Connexion",
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    userConnexion : async function(){
      await connexionUser(this.email,this.password);
    },
  }
}
</script>

<style scoped>

</style>