<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#F2F2F2"
      dark
      shrink-on-scroll
      prominent
      :src="require('../assets/img/logo_frkkarlsson.svg')"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(242, 242, 242,.7), rgba(242, 189, 199,.7)"
        ></v-img>
      </template>
      <template v-slot:extension>
        <v-tabs floating flat justify="center">
          <v-row justify="center">
            <v-btn
              v-for="(link, i) in links"
              :key="i"
              color="brownpink"
              text
              rounded
              class="my-2"
            >
              <nuxt-link :to="link.route">{{ link.text }}</nuxt-link>
            </v-btn>
          </v-row>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
    links: [
      { text: 'Home', route: '/' },
      { text: 'Couture', route: '/couture' },
      { text: 'Wedding', route: '/wedding' },
      { text: 'About', route: '/about' },
      { text: 'Contact', route: '/contact' }
    ]
  })
}
</script>

<style scoped>
a {
  display: block;
  color: #402d31 !important;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
}
</style>
