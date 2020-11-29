const ADD_TO_CART = "ADD_TO_CART"
const DELETE_CART_ITEM = "DELETE_CART_ITEM"
const CHANGE_QUANTITY_CART_ITEM = "CHANGE_QUANTITY_CART_ITEM"




export const addToCart = (payload) => {
    return {type: ADD_TO_CART, payload}
}

export const deleteCartItem = (payload) => {
    return {type: DELETE_CART_ITEM, payload}
}

export const changeQuantityCartItem = (payload) => {
    return {type: CHANGE_QUANTITY_CART_ITEM, payload}
}