
import { createStore, combineReducers } from 'redux';
import produtosReducers from './reducers/produtos';

const reducers = combineReducers({
    dados: produtosReducers,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig