
const initialState = {
  error: false,
  isLoading: false,
};

const  generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "SET_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};



export default  generalReducer