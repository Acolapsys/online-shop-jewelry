



const initialState = {
    category: 0,
    sortBy: "rating",
    productsPerPage: 8,
    currentPage: 1
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
        case ("SET_CURRENT_PAGE"): {
            return {...state, currentPage: action.payload}
        }
        default: return state
    }
}

export default filterReducer