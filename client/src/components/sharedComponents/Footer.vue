<template>
  <div>
      <v-footer
    dark
    height="auto"
    width="100%"
  >
    <v-card
      flat
      tile
      class="black white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon style="color:grey" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="grey--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>ViaD Technologies</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fa fa-facebook-official',
      'fa fa-instagram',
      'fa fa-google-plus',
      'fa fa-linkedin-square',
      'fa fa-twitter-square',
      'fa fa-youtube-square'
    ]
  })
}
</script>

<style scoped>
</style>
