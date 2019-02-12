<template>
  <v-toolbar class="grey">
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat class="mybutton" style="color:white;">Register</v-btn>
      <v-btn flat class="mybutton" style="color:white;">Log in </v-btn>
      <v-btn flat class="mybutton" style="color:white;">Log out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'page-nav'
  // methods: {
  //   logout () {
  //     this.$store.dispatch('setToken', null)
  //     this.$store.dispatch('setUser', null)
  //     this.$router.push({
  //       name: 'root'
  //     })
  //   }
  // }
}
</script>

<style scoped>
.cyan{
  text-decoration: none !important;
  text-transform: none! important;
}
.mybutton{
  text-decoration: none !important;
  text-transform: none! important;
}
.mytitles{
  text-decoration: none !important;
  text-transform: none! important;
}
.myrouterlink{
  text-decoration: none !important;
  text-transform: none! important;
  padding: 4px;
}
.myrouterlink:hover{
  color: aqua;
}
.mybutton:hover{
  color: aqua;
}
.mytitles:hover{
  color: aqua;
}
.mytitles{
  color: white;
}
router-link-exact-active{
  color:tomato;
}
</style>
