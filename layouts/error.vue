<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col md="6" offset-md="3">
          <h1 class="mediumpink--text text-center">404</h1>
          <h3 class="text-center mediumpink--text">
            Hoppsan! Något gick visst snett. Klicka på knappen nedan.
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" md="6" offset-md="3">
          <v-btn to="/" class="white--text text-center darkpink"
            >Till startsidan</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 5em;
}
</style>
