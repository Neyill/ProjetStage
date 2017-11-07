<style>
  .mot {
    height: 200px
  }
</style>

<template d="child-template">
  <textarea class="mot" id="mot" v-model="mot" row="3">{{ mot }}</textarea>
<div>
</template>

<script>
 export default {
   data: function () {
     return {
       mot: myJSON.mot
     }
   }
 }
let myJSON = {
   dateDebut: '20-11-2017',
   dateFin: '25-11-2017',
   type: 'Maladie',
   mot: 'Je suis en vacance mais je triche'
}
</script>