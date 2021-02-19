<template>
  <v-container>
    <v-sheet class="mx-auto" elevation="8" max-width="800">
      <v-slide-group v-model="pumpno" class="pa-4" show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="125"
            width="50"
            @click="toggle"
          >
            <!-- <v-card-title>{{ n }}</v-card-title> -->
            <v-icon color="white" size="48"
              >mdi-numeric-{{ n }}-circle-outline</v-icon
            >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon v-if="active" color="white" size="30"
                  >mdi-numeric-{{ n }}-circle</v-icon
                >
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet v-if="pumpno != null" tile>
          <v-row class="fill-height">
            <v-col>
              <v-data-table
                :headers="headers"
                :items="desserts"
                item-key="name"
                class="elevation-1"
                :search="search"
                :custom-filter="filterOnlyCapsText"
              >
                <template v-slot:top>
                  <v-text-field
                    v-model="search"
                    label="Search (UPPER CASE ONLY)"
                    class="mx-4"
                  ></v-text-field>
                </template>
                <template v-slot:body.append>
                  <tr>
                    <td></td>
                    <td>
                      <v-text-field
                        v-model="calories"
                        type="number"
                        label="Less than"
                      ></v-text-field>
                    </td>
                    <td colspan="4"></td>
                  </tr>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </v-container>
</template>

<script>
// pass pump number dekat axios untuk query lain2 pump
export default {
  data() {
    return {
      pumpno: null,
      text: "center",
      amount: "",
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 1,
      toggle_multiple: [0, 1, 2],
      fueltype: "",
      search: "",
      calories: "",
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Transaction",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Price",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Date",
          value: "calories",
          filter: (value) => {
            if (!this.calories) return true;

            return value < parseInt(this.calories);
          },
        },
        { text: "Fuel type", value: "fat" },
      ];
    },
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      );
    },
  },
};
</script>