



const initialState = {
    category: 0,
    sortBy: "popular",
    productsPerPage: 8
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SET_SORT_BY"): {
            return {...state, sortBy: action.payload}
    }
        case ("SET_CATEGORY"): {
            return {...state, category: action.payload}
        }
        case ("SET_PRODUCTS_PER_PAGE"): {
            return {...state, productsPerPage: action.payload}
        }
        default: return state
    }
}

export default filterReducer