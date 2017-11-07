<style>
</style>
<!-- <template>
  <div class="col-md-6">
    <select class="form-control" v-model="selected">
      <option v-for="option in option" v-bind:value="option.id" selected=" {{ type == option.id}} ">{{ option.text }} {{ type == option.id}}</option>
    </select>
</div>
</template> -->

<template>
  <div  id="type" class="col-md-6">
    <select class="form-control">
      <option v-for="option in options" v-bind:value="option.id" >{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
 export default {
   data: function () {
     // return {
     //   option: myJSON.type,
     //   options: [{text: 'Maladie', id: 2},
     //    {text: 'Congés payés', id: 3},
     //    {text: 'Congés sans solde', id: 4},
     //    {text: 'Rattrapage', id: 5}]
     // }

     if (myJSON.type === '1') {
       return {
         options: [{text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Congés sans solde', id: 3},
          {text: 'Rattrapage', id: 4}]
       }
     } else if (myJSON.type === '2') {
       return {
         options: [{text: 'Congés payés', id: 2},
          {text: 'Maladie', id: 1},
          {text: 'Congés sans solde', id: 3},
          {text: 'Rattrapage', id: 4}]
       }
     } else if (myJSON.type === '3') {
       return {
         options: [{text: 'Congés sans solde', id: 3},
          {text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Rattrapage', id: 4}]
       }
     } else if (myJSON.type === '4') {
       return {
         options: [{text: 'Rattrapage', id: 4},
          {text: 'Maladie', id: 1},
          {text: 'Congés payés', id: 2},
          {text: 'Congés sans solde', id: 3}]
       }
     }
   }
 }
 let myJSON = {
   'dateDebut': '20-11-2017',
   'dateFin': '25-11-2017',
   'type': '1',
   'mot': 'Je suis en vacance mais je triche'
}
</script>