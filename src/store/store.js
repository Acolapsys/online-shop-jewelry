import {combineReducers, createStore } from 'redux'
import generalReducer from './reducers/generalReducer'
import productsReducer from './reducers/productsReducer'




const reducers = combineReducers({
    productsPage: productsReducer,
    general: generalReducer
})




const store = createStore(reducers)

export default store