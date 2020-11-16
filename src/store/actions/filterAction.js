const SET_SORT_BY = "SET_SORT_BY"

const SET_CATEGORY = "SET_CATEGORY"


const setSortBy = (payload) => {
    return {type: SET_SORT_BY, payload}
}

const setCategory = (payload) => {
    return {type: SET_CATEGORY, payload}
}