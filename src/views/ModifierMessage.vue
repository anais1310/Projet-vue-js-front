<template>
  <div class="about">
    <br><h1>Modifier le message</h1><br>
    <div v-if="confirm">
      Catégorie modifiée avec succès !
    </div>
    <div class="form-group">
      <label for="titre">Titre du message</label>
      <input class="form-control" type="text" name="titre" v-model="newTitre" id="titre"/>
    </div><br>
    <div class="form-group">
      <label for="message">Message</label>
      <input class="form-control" type="text" name="message" v-model="newMessage" id="message"/>
    </div><br>
    <div>
      <button class="btn btn-info" @click="updateMessage" style="margin-bottom: 210px;">Modifier</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {getMessage, putMessage} from '../api/message'

export default {
  name: 'ModifierMessage',
  data () {
    return {
      message: {},
      confirm: false,
      newTitre: '',
      //newDate: '',
      newMessage: '',
      newCategory: '',
    }
  },
  watch: {
    $route() {
      this.actualiseMessage()
    }
  },
  async mounted() {
    this.actualiseMessage()
  },
  methods: {
    async actualiseMessage() {
      console.log(this.$route.params.id)
      this.message = await getMessage(this.$route.params.id).then((response) => {
        this.newTitre = response.data.titre;
        this.newMessage = response.data.message;
        this.newCategory = response.data.category.id;
        return response.data
      })
    },
    async updateMessage() {
      await putMessage(this.$route.params.id, {
        titre: this.newTitre,
        message: this.newMessage,
        category: this.newCategory,
      }).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/messages') //redirection
      })
    }
  }
}

</script>