<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <v-form @submit.prevent="onSignUp">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    v-model="email"
                    type="email"
                    prepend-icon="mail"
                    required><span>*</span>
                    </v-text-field>
                  </v-flex>                  
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    prepend-icon="lock"
                    required>
                    </v-text-field>
                  </v-flex>                  
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    v-model="confirmPassword"
                    type="password"
                    required
                    prepend-icon="lock"
                    :rules="confirmPasswordRules">
                    </v-text-field>
                  </v-flex>                  
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" :rules="confirmPasswordRules">Sign up</v-btn>
                  </v-flex>
                </v-layout>

              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      confirmPasswordRules: [
        v => (!!v && v) === this.password || 'Password do not match'
      ]
    }
  },
  computed: {

  },
  methods: {
    onSignUp () {
      this.$store.dispatch( 'userSignUp', { email: this.email, password: this.password } )
    }
  }
}
</script>

