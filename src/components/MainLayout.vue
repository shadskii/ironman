<template>
  <v-container>
    <v-layout
      text-xs-center
      column
    >

      <v-flex xs12>
        <v-img
          :src="require('../assets/ironman.png')"
          contain
          height="400"
        >
          <v-layout
            align-center
            fill-height
          >
            <count-down-timer
              class="push"
              :date="ironmanDate"
            />

          </v-layout>
        </v-img>
        &nbsp;
      </v-flex>
      <v-flex
        xs12
      >
        <span
          class="font-weight-light display-1"
          v-text="'Louisville, KY'"
        />
      </v-flex>
      <v-flex
        xs12
      >
        <span
          class="font-weight-thin title"
          v-text="'October 13th, 2019'"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CountDownTimer from './CountDownTimer';
export default {
  components: {
    CountDownTimer,
  },
  data() {
    return {
      ironmanDate: Date.parse('13 Oct 2019 07:25:00 EST')/1000,
    };
  },
};
</script>

<style scoped>
.push{
padding-top: 12vh;
float: left;
}
</style>
