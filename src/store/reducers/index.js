import {combineReducers } from 'redux'
import generalReducer from './generalReducer'
import productsReducer from './productsReducer'






const reducers = combineReducers({
    productsPage: productsReducer,
    general: generalReducer
})

export default reducers