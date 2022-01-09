<template>
  <div>
    <label :for="id">{{ label }}<span v-if="required">*</span></label>
    <input :type="type" :name="name" :id="id" :class="classe" :required="isRequired"/>
  </div>
</template>

<script>
export default {
  name: "InputText",
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
  computed: {
    isRequired(){
      return this.required ? 'require': '';
    }
  }
}
</script>

<style scoped>

</style>