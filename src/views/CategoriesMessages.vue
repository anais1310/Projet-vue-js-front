<template>
  <div class="about">
    <br><h1>Liste des messages de la catégorie : {{ category.libelle }}</h1><br>
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-4">
              </div>
            </div>
          </div>
          <table v-if="(category.messages.length > 0)" class="table table-striped table-hover table-bordered">
            <thead>
            <tr>
              <th>ID</th>
              <th>Titre du message</th>
              <th>Date</th>
              <th>Message</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
            </thead>
            <tbody v-for="message in category.messages" :key="message.id">
            <tr>
              <td>{{message.id}}</td>
              <td>{{ message.Titre }}</td>
              <td>Publié le {{ moment(message.date).format('DD-MM-YYYY, h:mm:ss') }}</td>
              <td>{{ message.message }}</td>
              <td><router-link :to="{name:'modifier-message', params: {id: message.id}}" class="edit" title="" data-toggle="tooltip" data-original-title="Edit">🖊</router-link></td>
              <td>
                <a @click="removeMessage(message.id)" class="delete" title="" data-toggle="tooltip" data-original-title="Delete">🗑</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCategorie} from '../api/categorie'
import {deleteMessage} from '../api/message'
import moment from "moment";

export default {
  name: 'CategoriesMessages',
  data () {
    return {
      category: {}
    }
  },
  watch: {
    $route() {
      this.actualiseCategorie()
    }
  },
  async mounted() {
    this.actualiseCategorie()
  },
  methods: {
    moment(date) {
      moment.locale();
      return moment(date);
    },
    async actualiseCategorie() {
      console.log(this.$route.params.id)
      this.category = await getCategorie(this.$route.params.id).then((response) => {
        return response.data
      })
    },
    async removeMessage(id) {
      await deleteMessage(id).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        location.reload();
      })
    }
  }
}
</script>