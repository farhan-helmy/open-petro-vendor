<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <vue-clock></vue-clock>
      </v-col>
    </v-row>
    <h1 class="text-center">Fuel Price Today</h1>
    <v-row align="center" class="mx-0" dense>
      <v-col cols="6" align="center">
        <v-card max-width="250px" color="green" class="mx-auto my-8">
          <v-card-title class="justify-center"> RON97</v-card-title>
          <v-icon>mdi-gas-station</v-icon>
          <v-avatar class="ma-0" size="100" max-height="50" rounded>
            {{ this.ron97 }}
          </v-avatar>
        </v-card>
      </v-col>
      <v-col align="center">
        <v-card max-width="250px" color="yellow" class="mx-auto">
          <v-card-title class="justify-center">RON95</v-card-title>
          <v-icon>mdi-gas-station</v-icon>
          <v-avatar class="ma-0" size="100" max-height="50" rounded>
            {{ this.ron95 }}
          </v-avatar>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueClock from "@dangvanthanh/vue-clock";
import axios from "axios";
export default {
  data: () => ({
    ron95: "",
    ron97: "",
  }),
  components: {
    VueClock,
  },
  mounted() {
    this.getFuelPrice();
  },
  methods: {
    getFuelPrice() {
      var utc = new Date().toJSON().slice(0, 10);
      console.log(utc);
      return new Promise((resolve, reject) => {
        axios({
          url: "https://openpetro.me/hargaminyak/" + utc,
          method: "GET",
        })
          .then((resp) => {
            console.log(resp)
            this.ron95 = resp.data[0].ron95;
            this.ron97 = resp.data[0].ron97;
            resolve(resp);
          })
          .catch((err) => {
            console.log(err.body);
            reject(err);
          });
      });
    },
  },
};
</script>