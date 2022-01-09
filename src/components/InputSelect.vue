<template>
    <div>
      <label :for="id">{{ label }}<span v-if="required">*</span></label>
      <select :type="type" :name="name" :id="id" :class="classe" :required="isRequired">
        <option value="" v-if="!required"></option>
        <option v-for="(item, index) in donnees" :value="index" :key="index">{{ item }}</option>
      </select>
    </div>
  </template>

  <script>
    export default {
      name: "InputSelect",
      props: {
        label: String,
        name: String,
        id: String,
        type: {
          type: String,
          default: 'text'
        },
        classe: String,
        required: {
          type: Boolean,
          default: true
        }
      },
      donnes: Object,
      computed: {
        isRequired(){
          return this.required ? 'require': '';
        }
      }
    }
  </script>

  <style scoped>

  </style>


