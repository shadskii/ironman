<template>
  <v-flex
    xs12
  >
    <div class="block text-xs-center">
      <p class="font-weight-bold display-1">{{ days | two_digits }}</p>
      <p class="font-weight-thin">Days</p>
    </div>
    <div class="block text-xs-center">
      <p class="font-weight-bold display-1">{{ hours | two_digits }}</p>
      <p class="font-weight-thin">Hours</p>
    </div>
    <div class="block text-xs-center">
      <p class="font-weight-bold display-1">{{ minutes | two_digits }}</p>
      <p class="font-weight-thin">Minutes</p>
    </div>
    <div class="block text-xs-center">
      <p class="font-weight-bold display-1">{{ seconds | two_digits }}</p>
      <p class="font-weight-thin">Seconds</p>
    </div>
  </v-flex>
</template>
<script>
export default {
  props: {
    date: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      now: Math.trunc(Date.now() / 1000),
    };
  },
  computed: {
    seconds() {
      return (this.date - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.date - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24);
    },
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(Date.now() / 1000);
    }, 1000);
  },
};
</script>
<style>
.block {
    display: inline-block;
    margin-right: 1em;
}
</style>
