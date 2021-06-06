import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },

  mutations: {
    setPaymentsListData: (state, payload) => {
      state.paymentsList = payload
    },

    addDataToPaymentsList: (state, payload) => {
      state.paymentsList.push(payload)
    },

    setCategories(state, payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
    },
  },

  getters: {
    getPaymentsList: state => state.paymentsList,
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.price, 0)
    },

    getCategoryList: state => state.categoryList,
  },

  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const item = [];
          for (let i = 1; i < 25; i++) {
            item.push({
              date: '24.03.2020',
              category: 'Transport',
              price: i,
            })
          }
          resolve(item)
        }, 1000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    },

    loadCategories({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment'])
        }, 1000)
      })
        .then(res => {
          commit('setCategories', res)
        })
    },
  },
})
