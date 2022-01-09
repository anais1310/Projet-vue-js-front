<template>
  <div class="about">
    <br><h1>Modifier catégorie</h1><br>
    <div v-if="confirm">
      Catégorie modifiée avec succès !
    </div>
    <div class="form-group">
      <label for="libelle">Libellé</label>
      <input class="form-control" type="text" name="libelle" v-model="newLibelle" id="libelle"/>
    </div><br>
    <div class="form-group">
      <label for="couleur">Couleur</label>
      <input class="form-control" type="text" name="couleur" v-model="newCouleur" id="couleur"/>
    </div><br>
    <div>
      <button class="btn btn-info" @click="updateCategorie" style="margin-bottom: 225px;">Modifier</button>
    </div>
  </div>
</template>

<script>
import {getCategorie, putCategorie} from '../api/categorie'

export default {
  name: 'ModifierCategorie',
  data () {
    return {
      category: {},
      confirm: false,
      newLibelle: '',
      newCouleur: ''
    }
  },
  async mounted() {
    this.actualiseCategorie()
  },
  methods: {
    async actualiseCategorie() {
      console.log(this.$route.params.id)
      this.category = await getCategorie(this.$route.params.id).then((response) => {
        this.newLibelle = response.data.libelle;
        this.newCouleur = response.data.couleur;
        return response.data
      })
    },
    async updateCategorie() {
      await putCategorie(this.$route.params.id, {
        libelle: this.newLibelle,
        couleur: this.newCouleur
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}

</script>