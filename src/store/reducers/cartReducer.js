const initialState = {
  cart: [],
  fullCartPrice: 0
};

const getFullCartPrice =  (cart) => cart.reduce((acc, p) => acc + p.price * p.quantity, 0)


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cart = [...state.cart];
      let duplicateProduct = false;
      cart.forEach((item) => {
        if (item.id === action.payload.id) {
          duplicateProduct = true;
          item.quantity++;
        }
      });
      if (!duplicateProduct) {
        cart.push({ ...action.payload, quantity: 1 });
      }
      return { ...state, cart: cart, fullCartPrice: getFullCartPrice(cart) };
    }
    case "DELETE_CART_ITEM": {
      const newCart = state.cart.filter(item => item.id !== action.payload)

      return {...state, cart: newCart, fullCartPrice: getFullCartPrice(newCart)}
    }

    default:
      return state;
  }
};

export default cartReducer;
