<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info mb-2" v-for="meetup in meetups" :key="meetup.id">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-img
                    :src="meetup.imageUrl"
                    height="130px"
                    contain
                  ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                    <div>
                      <div class="headline mb-0">{{ meetup.title }}</div>
                      <div>{{ meetup.date | dateFormatter }}</div>
                    </div> 
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat :to="'/meetups/' + meetup.id">
                      <v-icon left light>arrow_forward</v-icon>
                      View Meetup
                    </v-btn>
                  </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
