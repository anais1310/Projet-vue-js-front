<template>
  <div class="about">
    <img alt="Fond arraignée" src="../assets/fond.png" class="img-fluid">
    <br><h1>Liste des messages</h1><br>
    <div class="px-3 py-2 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
          <input class="form-control recherche" type="text" v-model="searchQueryMessages" placeholder="Rechercher..." />
        </form>
        <div class="text-end">
          <button class="btn btn-info bouton"><router-link style="color: black" to="/nouveau-message">Nouveau message</router-link></button>
        </div>
      </div><br>
    </div>
    <div class="px-3 py-2 border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <table class="table table-striped table-hover table-bordered">
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
        <tbody>
        <tr v-for="message in filteredResourcesMessages" :key="message.id">
          <td>{{message.id}}</td>
          <td>{{message.titre}}</td>
          <td>Publié le {{ moment(message.date).format('DD-MM-YYYY, h:mm:ss') }}</td>
          <td>{{message.message}}</td>
          <!--        <td>{{message.category_id}}</td>-->
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
</template>

<script>
import {getMessages, deleteMessage} from '../api/message'
import moment from "moment";

export default {
  name: 'Messages',
  data () {
    return {
      searchQueryMessages:'',
      messages:[],
    }
  },
  computed: {
    filteredResourcesMessages() {
      if (this.searchQueryMessages) {
        return this.messages.filter((message) => {
          return this.searchQueryMessages.toLowerCase().split(' ').every(v => message.titre.toLowerCase().includes(v))
              || this.searchQueryMessages.toLowerCase().split(' ').every(v => message.message.toLowerCase().includes(v));
        })
      } else {
        return this.messages;
      }
    }
  },
  async mounted () {
    this.messages = await getMessages().then((response) => {
      return response.data['hydra:member']
    })
  },
  async removeMessage(id) {
    await deleteMessage(id).then((reponse) => {
      console.log(reponse)
      location.reload();
    })
  },
  methods: {
    moment(date) {
      moment.locale();
      return moment(date);
    }
  }
}

</script>

<style scoped>

</style>