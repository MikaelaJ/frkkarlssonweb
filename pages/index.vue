<template>
  <v-layout column justify-center align-center>
    <v-flex cols="12" sm8 md6>
      <div>
        <v-carousel
          hide-delimiter-background
          height="450"
          cycle
          interval="9000"
        >
          <v-carousel-item
            v-for="(ind, i) in index"
            :key="`${i}-${ind.fields.text}`"
            :src="ind.fields.image.fields.file.url"
          >
            <v-col
              sm="4"
              offset-sm="7"
              md="4"
              offset-md="7"
              class="text-carousel"
            >
              <v-card class="mx-auto mt-10 dustywhite" min-width="250px">
                <v-card-title class="brownpink--text pl-5">{{
                  ind.fields.title
                }}</v-card-title>
                <!-- OBS! vue-markdown måste vara på en och samma rad -->
                <vue-markdown class="brownpink--text pb-5 px-5">{{
                  ind.fields.text
                }}</vue-markdown>
              </v-card>
            </v-col>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    VueMarkdown
  },
  computed: {
    ...mapState('getindex', ['index'])
  },
  async created() {
    await this.getIndex({ content_type: 'index' })
  },
  methods: {
    ...mapActions('getindex', ['getIndex'])
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.text-carousel {
  width: 30vw;
  height: 20vh;
}
</style>
