import {combineReducers } from 'redux'
import generalReducer from './generalReducer'
import productsReducer from './productsReducer'

import filterReducer from './filterReducer'
import cartReducer from './cartReducer'
import blogsReducer from './blogsReducer'






const reducers = combineReducers({
    productsPage: productsReducer,
    general: generalReducer,
    filters: filterReducer,
    cartPage: cartReducer,
    blogsPage: blogsReducer

})

export default reducers