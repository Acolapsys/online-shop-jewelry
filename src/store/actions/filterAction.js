const SET_SORT_BY = "SET_SORT_BY"

const SET_CATEGORY = "SET_CATEGORY"


export const setSortBy = (payload) => {
    return {type: SET_SORT_BY, payload}
}

export const setCategory = (payload) => {
    return {type: SET_CATEGORY, payload}
}