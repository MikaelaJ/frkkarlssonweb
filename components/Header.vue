<template>
  <v-layout text-center wrap>
    <v-flex cols="12">
      <v-responsive>
        <v-row justify="center" class="mt-10">
          <router-link to="/">
            <v-img
              height="auto"
              width="100%"
              :src="require('../assets/img/logo_frkkarlsson.svg')"
              alt="logo"
            ></v-img>
          </router-link>
        </v-row>
      </v-responsive>

      <div class="hidden-sm-and-down">
        <v-toolbar floating flat justify="center">
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
        </v-toolbar>
      </div>

      <div class="hidden-md-and-up">
        <v-menu right offset-y>
          <template v-slot:activator="{ on }">
            <v-btn offset-y class="menu-icon mt-10" icon v-on="on" @click.stop>
              <v-icon class="display-1 mediumpink--text">mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list
            v-for="(link, i) in links"
            :key="i"
            tile
            flat
            max-width="200"
            min-width="180"
          >
            <v-list-item :to="link.route">
              <v-list-item-title tile class="brownpink--text my-1 pt-3">
                {{ link.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-flex>
  </v-layout>
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
