
import data from "../data/appdata.json";


export const state = () => ({
  products: [],
})
export const getters = {
  get_products: (state) => () => {
    return state.products
  },

  get_productwithcode: (state) => (code) => {
    return state.products.find(item => item.code === code)
  },

}
export const actions = {
  fetchproducts({ commit, dipatch }) {
    commit('setproducts', data.products)
  },
}
export const mutations = {
  setproducts(state, array) {
    state.products = array
  },

}
