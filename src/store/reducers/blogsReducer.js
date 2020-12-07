




const initialState = {
    blogs: [],
    blog: {}
}





const  blogsReducer = (state = initialState, action) => {
    
  
    switch (action.type) {
        case ("SET_BLOGS"): {
            return {...state, blogs: action.payload}}
        case ("SET_BLOG"): {
                return {...state, blog: action.payload}}
        default: 
            return state
    }

}


export default blogsReducer