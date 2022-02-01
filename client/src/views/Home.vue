<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <transition appear name="slide-y">
          <h1 v-show="showContent">Hi, I am Diana Torres a Marketing Specialist</h1>
        </transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <transition appear name="slide-x">
          <p v-show="showContent">
            I am a motivated, innovative and creative individual based in Chihuahua city Mexico.
            I strive to achieve maximum professional and personal
            development while
            offering first-class services to clients.
            I am always mindful of clients requirements and needs,
            providing creative and unique solutions to their problems.
            <br><br>
            I look forward to hearing from you!
          </p>
        </transition>
      </v-col>
    </v-row>
    <transition appear name="slide-x-reverse">
      <v-row v-show="showContent">
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          class="btn"
          text
        >
          <v-icon class="icon">mdi-email</v-icon>
          <p class="ml-3 mt-4">dianatorres.rr@hotmail.com</p>
        </v-btn>
      </v-row>
      <div v-show="showContent" class="divider"/>
    </transition>

    <transition appear name="slide-x-reverse">
      <v-row v-show="showContent">
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          class="btn"
          text
        >
          <v-icon class="icon">mdi-phone</v-icon>
          <p class="ml-3 mt-4">+52 614 408 1151</p>
        </v-btn>
      </v-row>
      <div v-show="showContent" class="divider"/>
    </transition>

    <transition appear name="slide-x-reverse">
      <v-row v-show="showContent">
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          class="btn"
          text
        >
          <v-icon class="icon">mdi-linkedin</v-icon>
          <p class="ml-3 mt-4">LinkedIn</p>
        </v-btn>
      </v-row>
    </transition>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  showContent = false

  mounted(): void {
    this.showContent = true
  }
}
</script>
<style lang="scss">
@import "../assets/styles/styles.scss";

.icon {
  color: white !important;
  transition: all 500ms !important;
}

.btn:hover .icon {
  transform: scale(1.5);
}

.divider {
  width: 30% !important;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid var(--v-primary-base);
  border-radius: 0;
}

p, h1 {
  color: white;
}

.slide-x-enter-active {
  transition: all 2s ease;
}

.slide-x-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-x-enter, .slide-x-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.slide-y-enter-active {
  transition: all 2s ease;
}

.slide-y-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-y-enter, .slide-y-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.slide-x-reverse-enter-active {
  transition: all 2s ease;
}

.slide-x-reverse-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-x-reverse-enter, .slide-reverse-x-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
