<template>
  <div>
    <div class="text-center">
      <v-menu bottom origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="secondary" dark v-bind="attrs" v-on="on">
            Choose Graph
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" link @click="actionClick(item.action)">
            <v-list-item-action>{{ item.title }}</v-list-item-action>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="row mt-5 mb-5" v-if="salesgraph">
      <div class="col">
        <h2 class="text-center">Sales</h2>
        <line-chart
          v-if="value.length > 0"
          :chartData="value"
          :options="chartOptions"
          :chartColors="salesColors"
          label="Sales"
        />
      </div>
    </div>

    <div class="row mt-5 mb-5" v-if="ron97">
      <div class="col">
        <h2 class="text-center">RON97 Sales</h2>
        <line-chart
          v-if="hargaminyak97.length > 0"
          :chartData="hargaminyak97"
          :options="chartOptions"
          :chartColors="ron97Colors"
          label="RON 97"
        />
      </div>
    </div>
    <div class="row mt-5 mb-5" v-if="ron95">
      <div class="col">
        <h2 class="text-center">RON95 sales</h2>
        <line-chart
          v-if="hargaminyak95.length > 0"
          :chartData="hargaminyak95"
          :options="chartOptions"
          :chartColors="ron95Colors"
          label="RON 95"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LineChart from "@/components/chartjs/LineChart";

export default {
  components: {
    LineChart,
  },
  data: () => ({
    salesgraph: false,
    ron95: false,
    ron97: false,
    value: [],
    hargaminyak97: [],
    hargaminyak95: [],
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
    salesColors: {
      borderColor: "#077187",
      pointBorderColor: "#0E1428",
      pointBackgroundColor: "#AFD6AC",
      backgroundColor: "#800080",
    },
    ron97Colors: {
      borderColor: "#077187",
      pointBorderColor: "#0E1428",
      pointBackgroundColor: "#AFD6AC",
      backgroundColor: "#74A57F",
    },
    ron95Colors: {
      borderColor: "#077187",
      pointBorderColor: "#0E1428",
      pointBackgroundColor: "#AFD6AC",
      backgroundColor: "#FFFF00",
    },
    items: [
      { title: "Overall Sales Graph", action: "salesgraph" },
      { title: "RON97 Sales", action: "ron97" },
      { title: "RON95 Sales", action: "ron95" },

    ],
  }),
  mounted() {
    this.apiCall();
    this.apiCall95();
    this.apiCall97();
  },
  methods: {
    actionClick(action){
      if (action === "salesgraph"){
        console.log('test')
        this.salesgraph = !this.salesgraph
      }else if(action === "ron97"){
        this.ron97 = !this.ron97
      }else if(action === "ron95"){
        this.ron95 = !this.ron95
      }
    },
    apiCall() {
      return new Promise((resolve, reject) => {
        axios({
          url: "https://api.openpetro.me/transactions/all",
          method: "GET",
        })
          .then((resp) => {
            console.log(resp.data.length);
            console.log(resp.data);
            var list = resp.data.length;
            for (var i = 0; i < list; i++) {
              var counter = resp.data[i];
              var price = counter.price;
              var date = counter.createdAt;
              this.value.push({ date, total: price });
            }
            resolve(resp);
          })
          .catch((err) => {
            console.log(err.body);
            reject(err);
          });
      });
    },
    apiCall95() {
      return new Promise((resolve, reject) => {
        axios({
          url: "https://api.openpetro.me/transactions/ron95",
          method: "GET",
        })
          .then((resp) => {
            console.log(resp.data.length);
            console.log(resp.data);
            var list = resp.data.length;
            for (var i = 0; i < list; i++) {
              var counter = resp.data[i];
              var price = counter.price;
              var date = counter.createdAt;
              this.hargaminyak95.push({ date, total: price });
            }
            resolve(resp);
          })
          .catch((err) => {
            console.log(err.body);
            reject(err);
          });
      });
    },
    apiCall97() {
      return new Promise((resolve, reject) => {
        axios({
          url: "https://api.openpetro.me/transactions/ron97",
          method: "GET",
        })
          .then((resp) => {
            console.log(resp.data.length);
            console.log(resp.data);
            var list = resp.data.length;
            for (var i = 0; i < list; i++) {
              var counter = resp.data[i];
              var price = counter.price;
              var date = counter.createdAt;
              this.hargaminyak97.push({ date, total: price });
            }
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