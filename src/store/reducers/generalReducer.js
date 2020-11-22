const initialState = {
  error: false,
  isLoading: false,
  categoriesList: [],
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.error };
    case "SET_CATEGORIES_LIST":
      return { ...state, categoriesList: action.payload };
    default:
      return state;
  }
};

export default generalReducer;
