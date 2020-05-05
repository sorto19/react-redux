import {createStore, combineReducers, compose, applyMiddleware} from 'redux' 
import thunk from  'redux-thunk'
import pokeReducer from  './pokeDuks'  

const rootReducer = combineReducers({
    pokemones: pokeReducer,
})
//configurando extencion de  navegador
const composeEnhances = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export default function generateStore(){
    const store= createStore(rootReducer,composeEnhances(applyMiddleware(thunk) ))
    return store;
}