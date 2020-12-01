const SET_SORT_BY = "SET_SORT_BY"

const SET_CATEGORY = "SET_CATEGORY"


const SET_PRODUCTS_PER_PAGE = "SET_PRODUCTS_PER_PAGE"

const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE"


export const setSortBy = (payload) => {
    return {type: SET_SORT_BY, payload}
}

export const setCategory = (payload) => {
    return {type: SET_CATEGORY, payload}
}

export const setPerPageAmount = (payload) => {
    return {type: SET_PRODUCTS_PER_PAGE, payload}
}

export const setActivePage = (payload) => {
    return {type: SET_ACTIVE_PAGE, payload}
}