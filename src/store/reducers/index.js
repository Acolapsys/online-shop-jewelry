import {combineReducers } from 'redux'
import generalReducer from './generalReducer'
import productsReducer from './productsReducer'

import filterReducer from './filterReducer'
import cartReducer from './cartReducer'






const reducers = combineReducers({
    productsPage: productsReducer,
    general: generalReducer,
    filters: filterReducer,
    cartPage: cartReducer

})

export default reducers