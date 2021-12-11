
import data from "../data/appdata.json";


export const state = () => ({
  products: [] ,
  products1: [],
  products2: []
})
export const getters = {
  get_products :(state) => () => {
    return state.products
  },
  get_products1 :(state) => () => {
    return state.products1
  },
  get_products2 :(state) => () => {
    return state.products2
  },
  get_productwithcode: (state) => (code) => {
    return state.products.find(item => item.code === code)
  },
  get_productwithcode1: (state) => (code) => {
    return state.products1.find(item => item.code === code)
  },
  get_productwithcode2: (state) => (code) => {
    return state.products2.find(item => item.code === code)
  }
}
export const actions = {
  fetchproducts({ commit, dipatch}) {
    commit('setproducts', data.products)
  },
  fetchproducts1({ commit, dipatch}) {
    commit('setproducts1', data.products1)
  },
  fetchproducts2({ commit, dipatch}) {
    commit('setproducts2', data.products2)
  }
}
export const mutations = {
  setproducts(state, array){
    state.products = array
  },
  setproducts1(state, array){
    state.products1 = array
  },
  setproducts2(state, array){
    state.products2 = array
  }
}
 