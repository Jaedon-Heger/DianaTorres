<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <div class="d-flex align-center">
      <h3>Diana Torres</h3>
    </div>

    <v-spacer></v-spacer>

    <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        class="btn header-link"
        text
    >
      <v-icon class="icon">mdi-email</v-icon>
    </v-btn>
    <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        class="btn header-link"
        text
    >
      <v-icon class="icon">mdi-email</v-icon>
    </v-btn>
    <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        class="btn"
        text
    >
      <v-icon class="icon">mdi-linkedin</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {

}
</script>

<style scoped lang="scss">
 @import "../assets/styles/styles.scss";

 h3,.icon {
   color: $text-primary!important;
 }
 .icon{
   transition: all 500ms!important;
 }
 .btn:hover .icon{
   transform: scale(1.5);
 }

 .header-link{
   border-right: 2px solid white;
   border-radius: 0;
 }
</style>
