<template>
  <v-container>
    <div class="viewheight">
      <v-row>
        <v-col>
          <h1>Contact me!</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="text-center">
            Please contact me if you have any questions or inqueries.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="text-center">
            <strong>Mobile:</strong> 070 734 07 72 <br /><strong>Email:</strong>
            <a href="mailto:info@frkkarlssoncouture.com">
              info@frkkarlssoncouture.com
            </a>
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.viewheight {
  height: 45vh;
}
p a {
  color: #d98b99;
  text-decoration: none;
}
h1 {
  position: relative;
  text-align: center;
  top: 30%;
  color: #402d31;
  font-family: Arial, Helvetica, sans-serif;
}
p {
  position: relative;
  text-align: center;
  color: #402d31;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
