


const initialState = {
    products: []
}


const  productsReducer = (state = initialState, action) => {
    
  
        switch (action.type) {
            case ("SET_PRODUCTS"): {
                debugger
                return {...state, products: action.products}}
            default: 
            return state
        }
   
}



export default productsReducer