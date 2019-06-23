import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { EROFS } from 'constants';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1600px-New_york_times_square-terabass.jpg',
        id: 'asdnjkasdhjkkk', 
        title: 'Meetup in New York',
        location: 'New York',
        date: new Date(),
        description: 'Labore voluptate sit reprehenderit minim mollit dolore in officia voluptate cillum. Incididunt ea reprehenderit do pariatur ut duis. Aute cupidatat ex et laboris qui. Incididunt laborum eu deserunt ipsum commodo deserunt adipisicing magna. Nisi do ea qui Lorem minim cillum.'
      },
      { 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg', 
        id: 'sdfsddfsdfsdsd', 
        title: 'Meetup in Paris',
        location: 'Paris',
        date: new Date(),
        description: 'Do tempor eiusmod ea laboris elit reprehenderit ea esse aliquip incididunt. Nostrud ut cupidatat culpa enim dolore aliqua in dolor esse. Cillum magna deserunt nisi aute.'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state, payload) {
      state.clearError = payload
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        description: payload.description,
        location: payload.location,
        imageUrl: payload.imageUrl,
        date: payload.date,
        id: 'hklnasdknasikasdj'
      }
      commit('createMeetup', meetup)
    },
    userSignUp ({ commit }, payload ) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    setUser ({ commit }, payload ) {
      commit('setUser', payload)
    },
    userSignIn ({ commit }, payload ) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', true)            
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', true)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({ commit }) {
      commit('clearError')
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort(( meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find(( meetup ) => {
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})