import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: (state, payload=1) => {
      return state.counter += payload;
    },
    decrement: (state, payload=1) => {
      return state.counter -= payload;
    }
  },
  actions: {
    // Commit is tied to MUTATIONS
    asyncIncrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment', payload)}, 1000)
    },
    asyncDecrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('decrement', payload)}, 1000)
    }
  }
})