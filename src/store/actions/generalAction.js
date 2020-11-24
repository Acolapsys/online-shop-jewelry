import Axios from "axios"

const SET_IS_LOADING = "SET_IS_LOADING"

const SET_CATEGORIES_LIST = "SET_CATEGORIES_LIST"

const SET_ERROR = "SET_ERROR"


export const setError = (payload) => {
    return {type: SET_ERROR, payload}
}

export const setIsLoading = (payload) => {
    return {type: SET_IS_LOADING, payload}
}

export const setCategoriesList = (payload) => {
    return {type: SET_CATEGORIES_LIST, payload}
}

export const fetchCategories = () => (dispatch) => {
    dispatch(setIsLoading(true));
    Axios
        .get("http://localhost:3001/categories")
        .then(({data}) => {
          
          dispatch(setCategoriesList(data));
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setIsLoading(false));
        });
}

