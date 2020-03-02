<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(cou, i) in couture"
        :key="`${i}-${cou.fields.title}`"
        md="8"
        offset-md="2"
      >
        <h1 class="text-center brownpink--text pb-4">{{ cou.fields.title }}</h1>
        <vue-markdown>{{ cou.fields.text }}</vue-markdown>
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
            v-for="(couimg, i) in coutureImages"
            :key="`${i}-${couimg.fields.title}`"
            :src="couimg.fields.image.fields.file.url"
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
    ...mapState('getcouture', ['couture']),
    ...mapState('getcoutureasset', ['coutureImages'])
  },
  async created() {
    await this.getCouture({ content_type: 'couture' })
    await this.getCoutureImages({ content_type: 'coutureImages' })
  },
  methods: {
    ...mapActions('getcouture', ['getCouture']),
    ...mapActions('getcoutureasset', ['getCoutureImages'])
  }
}
</script>
<style></style>
