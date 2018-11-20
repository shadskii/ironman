<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Countdown to </span>
        <span class="death-title font-weight-black">DEATH</span>

      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-slide-y-transition appear>
          <main-layout />
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import MainLayout from './components/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
  data() {
    return {
      ironmanDate: Date.parse('13 Oct 2019 00:12:00 GMT')/1000,
    };
  },
};
</script>
<style>
.death-title{
  color: red;
}
body{
   background-color: black;
}
</style>
