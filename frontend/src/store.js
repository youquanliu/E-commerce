import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
console.log(`store: ${store}`)

export default store
