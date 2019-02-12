<template>
  <div id="app">
    <v-app>
      <page-header style="height:60px;"/>
      <!-- <page-header/> -->

      <div class="navheader">
        <!-- <page-nav/>  -->
      </div>
      <main style="flex-grow: 1;">
        <v-container fluid>
          <router-view>
          </router-view>
        </v-container>
      </main>
      <Footer fixed flexshrink:0/>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/sharedComponents/PageHeader.vue'
import Footer from '@/components/sharedComponents/Footer.vue'
import PageNav from '@/components/sharedComponents/PageNav.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    Footer,
    PageNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-bottom: 2px;
}
.navheader{
  margin-top: 60px;
}
</style>
