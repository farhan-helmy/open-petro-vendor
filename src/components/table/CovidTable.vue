<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :options.sync="options"
      :server-items-length="totalDesserts"
      :loading="loading"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      totalDesserts: 0,
      desserts: [],
      loading: true,
      options: {},
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: true,
          value: "createdAt",
        },
        { text: "Location", value: "location" },
        { text: "Name", value: "customer.name" },
        { text: "Risk", value: "risk" },
      ],
    };
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi() {
      this.loading = true;
      this.fakeApiCall().then((data) => {
        this.desserts = data.items;
        this.totalDesserts = data.total;
        this.loading = false;
      });
    },
    /**
     * In a real application this would be a call to fetch() or axios.get()
     */
    fakeApiCall() {
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        axios
          .get("https://api.openpetro.me/covid/all")
          .then((resp) => {
            let items = resp.data;
            const total = items.length;
            if (sortBy.length === 1 && sortDesc.length === 1) {
              items = items.sort((a, b) => {
                const sortA = a[sortBy[0]];
                const sortB = b[sortBy[0]];

                if (sortDesc[0]) {
                  if (sortA < sortB) return 1;
                  if (sortA > sortB) return -1;
                  return 0;
                } else {
                  if (sortA < sortB) return -1;
                  if (sortA > sortB) return 1;
                  return 0;
                }
              });
            }

            if (itemsPerPage > 0) {
              items = items.slice(
                (page - 1) * itemsPerPage,
                page * itemsPerPage
              );
            }

            setTimeout(() => {
              resolve({
                items,
                total,
              });
            }, 1000);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
  },
};
</script>