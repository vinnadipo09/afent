<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="grey darken-2" dark>
      <v-toolbar-title style="text-align:center;">{{title}}</v-toolbar-title>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        Define Slot Content
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
  props: [
    'title'
  ]
}
</script>

<style scoped>
.paneltitle{
  text-align: center;
}
</style>
