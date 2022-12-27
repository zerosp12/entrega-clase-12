import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tablaLista: [],
  },
  getters: {
    obtenerTabla(state) {
      return state.tablaLista
    }
  },
  mutations: {
    llenarTablaLista(state, valores) {
      state.tablaLista = valores
    },
    agregarItemTabla(state, object) {
      state.tablaLista.push(object)
      console.log(object)
      console.log(state.tablaLista)
    }
  },
  actions: {
    obtenerTablaAPI({commit}) {

      axios.get('https://639a60473a5fbccb5265ab59.mockapi.io/clase-12')
      .then(resultado => {
        commit('llenarTablaLista', resultado.data)
      })

    }
  },
  modules: {
  }
})
