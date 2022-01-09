<template>
  <div class="about">
    <br><h1>Ajouter un nouveau message</h1><br>
    <div v-if="confirm">
      Message ajoutée avec succès !
    </div>
    <div class="form-group">
      <label for="titre">Titre</label>
      <input type="text" name="titre" v-model="titre"  id="titre" class="form-control"/>
    </div><br>
    <div class="form-group">
      <label for="message">Message</label>
      <input type="text" name="message" v-model="message"  id="message" class="form-control"  />
    </div><br>
    <div class="form-group">
      <label>Catégorie du message : </label>
        <select v-model="idCategorieMessage" class="form-select">
          <option v-for="category in categories" :key="category.id" :value="category.id">{{category.libelle}}</option>
        </select>
    </div><br>
    <div>
      <span>Date et heure : {{date}}</span>
    </div><br>
    <button class="btn btn-info" @click="ajoutMessage" style="margin-bottom: 90px">Ajouter</button>
  </div>
</template>

<script>
import {postMessage} from '../api/message'
import {getCategories} from '../api/categorie'

export default {
  name: 'NouveauMessage',
  data () {
    return {
      categories:{},
      titre: '',
      date: new Date(),
      message: '',
      confirm: false,
      idCategorieMessage:'',
    }
  },
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })
    console.log(this.categories)
  },
  methods: {
    async ajoutMessage() {
      console.log(this.titre)
      console.log(this.message)
      console.log(this.date)
      console.log("/vuejs/public/index.php/api/categories/")
      await postMessage({
        titre: this.titre,
        message: this.message,
        date: this.date,
        category: "/vuejs/public/index.php/api/categories/" + this.idCategorieMessage
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/messages') //redirection
      })
    }
  }
}

</script>

<style>
</style>