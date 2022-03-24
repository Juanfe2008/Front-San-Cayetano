<template>
  <div>
  <simpleOptions />
  <div class="content">
    <nuxt />
  </div>
  </div>
</template>

<script>
import simpleOptions from "../components/simpleOptions.vue"

export default {
  head1() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Oswald&display=swap"
        }
      ]
    };
  },
  components: {
    simpleOptions
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #2d3436 !important;
  color: #fff !important;
  font-family: Arial, Helvetica, sans-serif;
}

.content {
  padding: 2rem;
}

</style>
