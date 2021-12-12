/* import axios from "axios"; */
/* import data from "../data/appdata.json"; */

import axios from "axios"


export const state = () => ({
  products: [],
  /* apilink: 'http://localhost:3080' */
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
  fetchproducts({ commit, dispatch }) {
    axios.get("http://localhost:3080/api/products")
      .then((response) => {
        commit('setproducts', response.data)
      },
        (error) => {
          alert(error)
        })
  },
}
export const mutations = {
  setproducts(state, array) {
    state.products = array
  },

}
