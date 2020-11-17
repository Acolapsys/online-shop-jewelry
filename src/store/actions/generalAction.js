const SET_IS_LOADING = "SET_IS_LOADING"

const SET_ERROR = "SET_ERROR"


export const setError = (payload) => {
    return {type: SET_ERROR, payload}
}

export const setIsLoading = (payload) => {
    return {type: SET_IS_LOADING, payload}
}