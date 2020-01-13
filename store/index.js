import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const createStore = () => {
  return new Vuex.Store({
    state: {
      count: []
    },
    mutations: {
      increment () {
        console.log('increment')
      },
      ...vuexfireMutations
    },
    actions: {
      setCountRef: firestoreAction(({ bindFirestoreRef }, ref) => {
        bindFirestoreRef('count', ref)
      })
    },
    getters: {
      getCount: (state) => {
        return state.count
      }
    }
  })
}

export default createStore
