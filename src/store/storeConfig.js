
import { createStore, combineReducers, applyMiddleware } from 'redux';
import produtosReducers from './reducers/produtos';
import authReducer from './reducers/authReducer';
import promise from 'redux-promise'

const reducers = combineReducers({
    dados: produtosReducers,
    auth: authReducer
})

function storeConfig() {
    return applyMiddleware(promise)(createStore)(reducers)
}

export default storeConfig