// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import FBSignInButton from 'vue-facebook-signin-button'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(FBSignInButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
