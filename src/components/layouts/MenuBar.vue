<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h3 class="font-weight-bold display-1 basil--text">
       OpenPetro Management Dashboard
      </h3>
    </v-card-title>

    <v-tabs
      background-color="transparent"
      color="basil"
      grow
      
    >
      <v-tab to='home'>
          <v-icon>mdi-home</v-icon>
        Home
      </v-tab>
      <v-tab to='transaction-log'>
        Transaction Log
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
  export default {
   
  }
</script>

<style>
/* Helper classes */
.basil {
  background-color: #1746ac !important;
}
.basil--text {
  color: #ffffff !important;
}
</style>