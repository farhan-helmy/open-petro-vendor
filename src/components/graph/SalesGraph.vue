<template>
  <div>
    <div class="row mt-5 mb-5">
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

    <div class="row mt-5 mb-5">
      <div class="col">
        <h2 class="text-center">RON97</h2>
        <line-chart
          v-if="hargaminyak97.length > 0"
          :chartData="hargaminyak97"
          :options="chartOptions"
          :chartColors="ron97Colors"
          label="RON 97"
        />
      </div>
    </div>
      <div class="row mt-5 mb-5">
      <div class="col">
        <h2 class="text-center">RON95</h2>
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
  }),
  mounted() {
    this.apiCall();
     this.apiCallFuelPrice();
  },
  methods: {
    apiCall() {
      return new Promise((resolve, reject) => {
        axios({
          url: "http://localhost:3000/transactions/all",
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
    apiCallFuelPrice() {
      return new Promise((resolve, reject) => {
        axios({
          url: "http://hargaminyak.test/hargaminyak",
          method: "GET",
        })
          .then((resp) => {
            console.log(resp.data.length);
            console.log(resp.data);
            var list = resp.data.length;
            for (var i = 0; i < list; i++) {
              var counter = resp.data[i];
              var price97 = counter.ron97.replace("RM", "");
              var price95 = counter.ron95.replace("RM", "");
              console.log("price 97:" + price97)
              var date = counter.start_date;
              this.hargaminyak97.push({ date, total: price97 });
              this.hargaminyak95.push({ date, total: price95 });
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