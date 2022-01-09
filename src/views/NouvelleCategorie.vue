<template>
  <div class="about">
    <br><h1>Ajouter une nouvelle catégorie</h1><br>
    <div v-if="confirm">
      Catégorie ajoutée avec succès !
    </div>
      <div class="form-group">
        <label for="libelle">Libellé</label>
        <input type="text" name="libelle" v-model="libelle" class="form-control" id="libelle"/>
      </div><br>
      <div class="form-group">
        <label for="couleur">Couleur</label>
        <input type="text" name="couleur" v-model="couleur" class="form-control" id="couleur" />
      </div><br>
      <button class="btn btn-info" @click="ajoutCategorie" style="margin-bottom: 225px;">Ajouter</button>
  </div>
</template>

<script>
import {postCategorie} from '../api/categorie'

export default {
  name: 'NouvelleCategorie',
  data () {
    return {
      couleur: '',
      libelle: '',
      confirm: false
    }
  },
  methods: {
    async ajoutCategorie() {
      console.log()
      await postCategorie({
        couleur: this.couleur,
        libelle: this.libelle
    }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}

</script>

<style>

.form-group{
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

</style>