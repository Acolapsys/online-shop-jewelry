const SET_ERROR = "SET_ERROR";
const SET_IS_LOADING = "SET_IS_LOADING";
const initialState = {
  error: false,
  isLoading: false,
};

const  generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export const setIsLoading = (isLoading) => {
  return { type: SET_IS_LOADING, isLoading };
};
export const setError = (error) => {
  return { type: SET_ERROR, error };
};

export default  generalReducer