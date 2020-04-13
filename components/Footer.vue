<template>
  <v-layout text-center>
    <v-flex md12>
      <v-footer padless class="black--text">
        <v-row class="py-3" justify="center">
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            color="black"
            text
            rounded
            class="my-2"
          >
            <nuxt-link :to="link.route">{{ link.text }}</nuxt-link>
          </v-btn>
        </v-row>
      </v-footer>
      <v-row justify="center" class="bg-social-footer">
        <v-btn
          v-for="(social, i) in socials"
          :key="i"
          color="white"
          text
          rounded
          class="my-2"
        >
          <a :href="social.route" target="_blank">
            <v-icon color="white">{{ social.icon }}</v-icon>
          </a>
        </v-btn>
      </v-row>
      <div class="bg-social-footer pt-5">
        <v-row justify="center" app>
          <span class="mediumpink--text"
            >&copy; {{ new Date().getFullYear() }}</span
          >
        </v-row>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Footer',

  data: () => ({
    socials: [
      {
        icon: 'mdi-instagram',
        route: 'https://www.instagram.com/frkkarlssoncouture/?hl=en'
      },
      {
        icon: 'mdi-linkedin',
        route: 'https://www.linkedin.com/in/camilla-karlsson-0a3318163/'
      }
    ],
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
  color: #f2f2f2 !important;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
}

.v-footer {
  background-color: #402d31 !important;
}

.bg-social-footer {
  background-color: #402d31 !important;
}
</style>
