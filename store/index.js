import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import { ref, onValue, set, push, child, remove } from "firebase/database";
import { realDb, auth } from '../plugins/firebase.js';


export const state = () => ({
  users: {},
  products: [],
  inCart: [],
  cartProducts: [
    {
      product: {},
      count: 0,
      cid: 0
    }
  ]
})
export const getters = {
  get_products: (state) => () => {
    return state.products
  },
  Cart: (state) => () => {
    return state.inCart
  },
  getCartProducts: (state) => () => {
    return state.cartProducts
  },

  get_productwithcode: (state) => (code) => {
    return state.products.find(item => item.code === code)
  },
  isLogged: () => () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return true
      } return false
    })
  }
}
export const actions = {
  fetchproducts({ commit, dispatch }) {
    const starCountRef = ref(realDb, 'products');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      commit('setproducts', data)
    });
  },
  fetchCart({ commit, dispatch }) {
    onAuthStateChanged(auth, (user) => {
      let arr = []
      if (user) {
        const cartref = ref(realDb, "users/" + user.uid + "/inCart")
        onValue(cartref, (snapshot) => {
          if (snapshot.val() != null) {
            arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }))
          }
          commit('setInCart', arr)
        });
      }
      else {
        // commit('addToCart', payload)
      }
    });
  },
  addToCart({ commit, dispatch }, payload) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const cartref = ref(realDb, "users/" + user.uid + "/inCart")
        push(cartref, payload)
      }
      else {
        commit('addToCart', payload)
      }
    });
    dispatch('fetchCart')
  },
  removeFromCart({ commit, state, dispatch }, id) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const cartref = ref(realDb, "users/" + user.uid + "/inCart")
        const key = state.inCart.find(inCart => inCart.id === id).key
        remove(child(cartref, key))
      }
      else {
        commit('removeFromCart', id)
      }
    });
    dispatch('fetchCart')
  },
  register({ commit }, payload) {
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userCredential) => {
        alert("Hesap" + payload.email + "başarılı bir şekilde oluşturuldu!")
        const newUser = userCredential.user
        alert("oluşturulan kullanıcı idsi: " + newUser.uid)
        const userref = ref(realDb, "users/" + newUser.uid)
        const userData = {
          adresses: null,
          birthDay: "01-01-1998",
          couponsId: null,
          favoriteProducts: null,
          gender: 0,
          getSpecialOfferMessage: true,
          id: newUser.uid,
          inCart: null,
          messages: null,
          ordersId: null
        }
        alert("Kullanıcı verisi Realtime'a kaydedildi")
        set(userref, userData);
        location.reload();
      })
      .catch((error) => {
        alert(error.message)
      });
  },
  logout({ commit }) {
    signOut(auth)
      .then(() => {
        location.reload();
      })
  },
  login({ commit }, payload) {
    alert("login çalıştı.")
    alert(payload.email)
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then(
        user => {
          alert(payload.email + " ile giriş yaptınız");
          location.reload();
        },
      ).catch((error) => {
        alert(error.message)
      });

  },
  setUser({ commit }, item) {
    commit('setUser', item)
  },

}
export const mutations = {
  setproducts(state, array) {
    state.products = array
  },
  setInCart(state, array) {
    state.inCart = array
    state.cartProducts = []
    state.inCart.forEach(element => {
      const product = state.products.find(item => item.code === element.pid)
      const cartProduct = {
        product,
        count: element.count,
        id: element.id
      }
      state.cartProducts.push(cartProduct)
    });
  },
  removeFromCart(state, id) {
    const item = state.inCart.find(item => item.id === id)
    const index = state.inCart.indexOf(item)
    state.inCart.splice(index, 1);
  },
  addToCart(state, product) {
    state.inCart.push(product)
  },
  setUser(state, item) {
    state.user = item
  },

}
