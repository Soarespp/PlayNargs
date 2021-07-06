
import { createStore, combineReducers } from 'redux';
import produtosReducers from './reducers/produtos';
import authReducer from './reducers/authReducer';

const reducers = combineReducers({
    dados: produtosReducers,
    auth: authReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig