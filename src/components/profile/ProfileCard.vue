<template>
  <v-card
    class="mx-auto mt-5"
    max-width="434"
    align="center"
  >
    <v-img
      height="100%"
      src="@/assets/background/bg1.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="12"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
          >
            <v-img src="@/assets/profilepic/123.png"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title class="title">
                Muhammad Farhan Helmy
              </v-list-item-title>
              <v-list-item-subtitle>Petrol station owner</v-list-item-subtitle>
              <v-btn large elevation="2" color="red">LOGOUT</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>