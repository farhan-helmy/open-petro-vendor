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
        <v-icon>mdi-paper-roll-outline</v-icon>
        Transaction Log
      </v-tab>
       <v-tab to='userlists'>
         <v-icon>mdi-gas-station</v-icon>
        User Lists
      </v-tab>
       <v-tab to='graph'>
         <v-icon>mdi-chart-areaspline</v-icon>
        Revenue
      </v-tab>
       <v-tab to='feedback'>
         <v-icon>mdi-airplane-takeoff</v-icon>
         Feedback
      </v-tab>
       <v-tab to='covid19'>
         <v-icon>mdi-virus-outline</v-icon>
         Covid19
      </v-tab>
       <v-tab to='profile'>
         <v-icon>mdi-account-circle</v-icon>
        Profile
        
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