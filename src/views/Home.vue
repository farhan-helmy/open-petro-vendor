<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <vue-clock></vue-clock>
      </v-col>
    </v-row >
    <h1 class="text-center">Fuel Price Today</h1>
    <v-row align="center" class="mx-0" dense>
      <v-col cols="6" align="center">
        <v-card max-width="250px" color="green" class="mx-auto my-8">
          <v-card-title class="justify-center"> RON97</v-card-title>
          <v-icon>mdi-gas-station</v-icon>
           <v-avatar    
                class="ma-0"
                size="100"
                max-height="50"
                rounded
              >
              RM 1.93 / l
           </v-avatar>
        </v-card>
      </v-col>
      <v-col align="center">
        <v-card max-width="250px" color="yellow" class="mx-auto">
          <v-card-title class="justify-center">RON95</v-card-title>
           <v-icon>mdi-gas-station</v-icon>
           <v-avatar
                class="ma-0"
                size="100"
                max-height="50"
                rounded
              >
              RM 2.50 / l
           </v-avatar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueClock from "@dangvanthanh/vue-clock";
export default {
  components: {
    VueClock,
  },
};
</script>