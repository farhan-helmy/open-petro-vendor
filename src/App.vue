<template>
  <div>
    <v-app>
      <div>
        <menu-bar v-if="$route.name !== 'login'"></menu-bar>
          <router-view></router-view>
        
      </div>
    </v-app>
  </div>
</template>

<script>
import MenuBar from "@/components/layouts/MenuBar";
export default {
  components: {
    MenuBar,
  },

  data: () => ({
    //
  }),
};
</script>
