import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { ref, onValue, set } from "firebase/database";
import { realDb, auth } from '../plugins/firebase.js';


export const state = () => ({
  products: []
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
    const starCountRef = ref(realDb, 'products');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      commit('setproducts', data)
    });
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

}
export const mutations = {
  setproducts(state, array) {
    state.products = array
  },

}
