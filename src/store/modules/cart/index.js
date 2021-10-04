import axios from 'axios';
const state = {
  cartItems: []
}

const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems = payload;
  }
}

const actions = {
  getCartItems ({ commit }) {
    axios.get('/api/cart').then((response) => {
      commit('UPDATE_CART_ITEMS', response.data)
    });
  },
	addCartItem( { commit }, cartItem){
		axios.post('/api/cart',cartItem).then((response) => {
			commit('UPDATE_CART_ITEMS', response.data)
		})
	}
}

const getters = {
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  }
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}
export default cartModule;