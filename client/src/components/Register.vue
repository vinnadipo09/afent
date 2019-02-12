<template>
  <div>
    <v-layout>
      <v-flex text-xs-center xs6 offset-xs3 class="registerpanel">
        <panel title="Register">
          <div class="pr-4 pl-4 pt-4 pb-4">
            <form>
              <v-text-field
                color="blue"
                label="Email"
                :rules="emailRules"
                v-model="email"
                required
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="password"
                :counter="64"
                :rules="passwordRules"
                color="blue"
                label="Password"
                required
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="confirmPassword"
                :counter="64"
                :rules="confirmPasswordRules"
                color="blue"
                label="Confirm Password"
                required
              ></v-text-field>
                <br>
                <div v-if="error" class="error" v-html="error"/>
                <div v-else class="success" v-html="success"/>
                <div class="text-xs-center">
                <v-btn class="mybutton" round outline color="black" dark
                @click="register">
                Register
                </v-btn>
                <div>
                  <fb-signin-button
                    :params="fbSignInParams"
                    @success="onSignInSuccess"
                    @error="onSignInError">
                    Sign in with Facebook
                  </fb-signin-button>
                </div>
                </div>
            </form>
          </div>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/sharedComponents/Panel'
import PageNav from '@/components/sharedComponents/PageNav'
export default {
  name: 'register',
  components: {
    Panel,
    PageNav
  },
  data () {
    return {
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'The E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be greater or equal to 8 but less than 64 characters'
      ],
      confirmPassword: '',
      confirmPasswordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Passwords you type must match'
      ],
      error: null,
      success: null
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
  // methods: {
  //   async register () {
  //     try {
  //       const response = await AuthenticationService.register({
  //         email: this.email,
  //         password: this.password
  //       })
  //       this.$store.dispatch('setToken', response.data.token)
  //       this.$store.dispatch('setUser', response.data.user)
  //       this.$router.push({
  //         name: 'home'
  //       })
  //       this.success = response.data.success
  //       // console.log(response.data)
  //     } catch (error) {
  //       this.error = error.response.data.error
  //     }
  //   }
  // }
}
</script>

<style scoped>
.error{
  color: red;
  text-decoration: none! important;
}
.success{
  color: green;
}
.mybutton{
  text-transform: none! important;
  font-size: 20px;
}
.registerpanel{
  margin-top: 60px;
}
.navheader{
  margin-top: 120;
  height: 10px;
}
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
