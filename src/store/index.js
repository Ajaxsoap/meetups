import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1600px-New_york_times_square-terabass.jpg',
        id: 'asdnjkasdhjkkk', 
        title: 'Meetup in New York',
        location: 'New York',
        date: '2019-06-12',
        description: 'Labore voluptate sit reprehenderit minim mollit dolore in officia voluptate cillum. Incididunt ea reprehenderit do pariatur ut duis. Aute cupidatat ex et laboris qui. Incididunt laborum eu deserunt ipsum commodo deserunt adipisicing magna. Nisi do ea qui Lorem minim cillum.'
      },
      { 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg', 
        id: 'sdfsddfsdfsdsd', 
        title: 'Meetup in Paris',
        location: 'Paris',
        date: '2019-06-13',
        description: 'Do tempor eiusmod ea laboris elit reprehenderit ea esse aliquip incididunt. Nostrud ut cupidatat culpa enim dolore aliqua in dolor esse. Cillum magna deserunt nisi aute.'
      }
    ],
    user: {
      id: 'jkasdkkjakjklajsdkl',
      registeredMeetups: ['sdfsddfsdfsdsd']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
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
    }
  }
})