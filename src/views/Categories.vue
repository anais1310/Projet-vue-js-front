<template>
  <div class="about">
    <img alt="Fond arraignée" src="../assets/fond.png" class="img-fluid">
    <br><h1 class="text-center">Liste des catégories</h1><br>
    <div class="px-3 py-2 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto text-left">
          <input type="text" class="form-control" placeholder="Rechercher..." v-model="searchQueryCategories">
        </form>
        <div class="text-end">
          <button class="btn btn-info"><router-link style="color: black" to="/nouvelle-categorie">Nouvelle catégorie</router-link></button>
        </div>
      </div><br>
    </div>
    <div class="px-3 py-2 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <table class="table table-striped table-hover table-bordered">
        <thead>
        <tr>
          <th>ID</th>
          <th>Nom de la catégorie</th>
          <th>Couleur associé</th>
          <th>Voir les messages associés</th>
          <th>Modifier</th>
          <th>Supprimer</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="category in filteredResourcesCategories" :key="category.id">
          <td>{{category.id}}</td>
          <td>{{category.libelle}}</td>
          <td>{{category.couleur}}</td>
          <td><router-link :to="{name:'categorie_messages', params: {id: category.id}}" class="view" title="" data-toggle="tooltip" data-original-title="View">👁</router-link></td>
          <td><router-link :to="{name:'modifier-categorie', params: {id: category.id}}" class="edit" title="" data-toggle="tooltip" data-original-title="Edit">🖊</router-link></td>
          <td>
            <a v-if="!(category.messages.length>0)" @click="removeCategorie(category.id)" class="delete" title="" data-toggle="tooltip" data-original-title="Delete">🗑</a>
            <p v-if="!(category.messages.length==0)" class="delete" title="" data-toggle="tooltip" data-original-title="Delete">Cette catégorie ne peut pas être supprimé puisque des messages y sont liés</p>
          </td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {getCategories, deleteCategorie} from '../api/categorie'

export default {
  name: 'Categories',
  data () {
    return {
      confirm: false,
      searchQueryCategories:'',
      categories: []
    }
  },
  computed: {
    filteredResourcesCategories (){
      if(this.searchQueryCategories){
        return this.categories.filter((category)=>{
          return this.searchQueryCategories.toLowerCase().split(' ').every(v => category.libelle.toLowerCase().includes(v))
          || this.searchQueryCategories.toLowerCase().split(' ').every(v => category.couleur.toLowerCase().includes(v));
        })
      }else{
        return this.categories;
      }
    }
  },
  async mounted () {
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })
  },
  methods: {
    async removeCategorie(id) {
      await deleteCategorie(id).then((reponse) => {
        console.log(reponse)
        this.confirm = true //activation d'un bandeau de confirmation
        location.reload();
      })
    }
  }
}

</script>

<style>

a{
  text-decoration: none;
  cursor: pointer;
}

p.delete{
  margin: 0;
}
</style>