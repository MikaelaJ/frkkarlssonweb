<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(wed, i) in wedding"
        :key="`${i}-${wed.fields.title}`"
        md="8"
        offset-md="2"
      >
        <h1 class="text-center brownpink--text pb-4">{{ wed.fields.title }}</h1>
        <vue-markdown>{{ wed.fields.text }}</vue-markdown>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="8" offset-md="2">
        <v-carousel
          class="mt-10"
          align="center"
          justify="center"
          height="450"
          interval="8000"
          cycle
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(wedimg, i) in weddingImages"
            :key="`${i}-${wedimg.fields.title}`"
            :src="wedimg.fields.image.fields.file.url"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('getwedding', ['wedding']),
    ...mapState('getweddingasset', ['weddingImages'])
  },
  async created() {
    await this.getWedding({ content_type: 'wedding' })
    await this.getWeddingImages({
      content_type: 'weddingImages'
    })
  },
  methods: {
    ...mapActions('getwedding', ['getWedding']),
    ...mapActions('getweddingasset', ['getWeddingImages'])
  }
}
</script>
<style></style>
