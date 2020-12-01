



const initialState = {
    category: 0,
    sortBy: "rating",
    productsPerPage: 8,
    activePage: 1
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SET_SORT_BY"): {
            return {...state, sortBy: action.payload, activePage: 1}
    }
        case ("SET_CATEGORY"): {
            return {...state, category: action.payload, activePage: 1}
        }
        case ("SET_PRODUCTS_PER_PAGE"): {
            return {...state, productsPerPage: action.payload, activePage: 1}
        }
        case ("SET_ACTIVE_PAGE"): {
            return {...state, activePage: action.payload}
        }
        default: return state
    }
}

export default filterReducer