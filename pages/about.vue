<template>
  <v-container>
    <div v-for="(abo, i) in about" :key="`${i}-${abo.fields.title}`">
      <v-row>
        <v-col md="8" offset-md="2">
          <h1 class="text-center brownpink--text pb-4">
            {{ abo.fields.title }}
          </h1>
          <vue-markdown>{{ abo.fields.text }}</vue-markdown>
        </v-col>
        <v-col md="4" offset-md="4">
          <v-container>
            <v-row justify="space-between">
              <v-col>
                <v-img :src="abo.fields.image.fields.file.url"></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    VueMarkdown
  },
  computed: {
    ...mapState('getabout', ['about'])
  },
  async created() {
    await this.getAbout({ content_type: 'about' })
  },
  methods: {
    ...mapActions('getabout', ['getAbout'])
  }
}
</script>
<style></style>
