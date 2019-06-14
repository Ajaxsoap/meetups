<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6>
        <h2 class="primary--text">Organize a new Meetup</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form @submit.prevent="onCreateMeetup">
          <v-layout xs12 md4>
            <v-text-field
              name="title"
              label="Title"
              id="title"
              v-model="title"
              :rules="titleRules"
              required>
            </v-text-field>
          </v-layout>
          <v-layout xs12 md4>
            <v-text-field
              name="location"
              label="Location"
              id="location"
              v-model="location"
              :rules="locationRules"
              required>
            </v-text-field>
          </v-layout>
          <v-layout xs12 md4>
            <v-textarea
              name="description"
              label="Description"
              id="description"
              v-model="description"
              :rules="descriptionRules"
              required>
            </v-textarea>
          </v-layout>
          <v-layout xs12 md4>
            <v-text-field
              name="imageUrl"
              label="Image URL"
              id="imageUrl"
              v-model="imageUrl"
              required>
            </v-text-field>
          </v-layout>
            <v-layout xs12 md4>
              <img :src="imageUrl" alt="" height="190">
            </v-layout>
          <v-layout row>
            <v-flex xs12 sm6>
              <v-btn type="submit" class="primary" :disabled="!formIsValid">Create Meetup</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      title: '',
      location: '',
      description: '',
      imageUrl: '',
      date: '',
      titleRules: [
        v => !!v || 'Title is required'
      ],
      locationRules: [
        v => !!v || 'Location is required'
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
        v => v.length <= 255 || 'Name must be less than 255 characters'
      ]  
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.location !== '' && this.description !== '' && this.imageUrl !== ''
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        description: this.description,
        location: this.location,
        imageUrl: this.imageUrl,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
