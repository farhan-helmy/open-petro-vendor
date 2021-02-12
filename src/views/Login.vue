<template>
  <div>
    <top-bar></top-bar>

    <v-container fluid>
      <v-row dense>
        <v-card class="mx-auto my-12" max-width="400" color="cyan lighten-4">
          <v-img
          src="@/assets/office.gif"
            height="270px"
          ></v-img>
          <login-form></login-form>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TopBar from "@/components/layouts/TopBar";
import LoginForm from "@/components/forms/LoginForm";
export default {
  components: {
    TopBar,
    LoginForm,
  },
};
</script>