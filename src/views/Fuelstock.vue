<template>
  <v-container>
    <v-row>
      <v-col align="center">
        <vue-gauge
          :refid="'type-unique-id'"
          :options="{ needleValue: 50, arcDelimiters: [50], chartWidth: 500 }"
        ></vue-gauge>
      </v-col>
    </v-row>
  </v-container>
</template>
 
<script>
import VueGauge from "vue-gauge";
export default {
  components: { VueGauge },
};
</script>