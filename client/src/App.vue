<template>
  <v-app>
    <app-header/>

    <v-main class="background-color">
      <div class="content">
        <router-view/>
      </div>
      <background class="background"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Background from '@/components/Background.vue';
import AppHeader from '@/components/AppHeader.vue';

@Component({
  components: {
    AppHeader,
    Background,
  },
})
export default class App extends Vue {

}
</script>

<style scoped lang="scss">
@import "assets/styles/styles.scss";

.background {
  position: fixed;
  right: 5%;
  top: 15%;
  width: 60% !important;
}

.background-color {
  background-color: $main-background-color;
}

.content {
  width: 35%;
  margin-top: 10%;
  margin-left: 30px;
}
</style>
