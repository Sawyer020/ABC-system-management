import { legacy_createStore, combineReducers, compose, applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"

// Combind reducers with different module
const reducers = combineReducers({
    handleNum,
    handleArr 
})

// Create database
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
It's for the browser runs extension 'redux dev tools'
*/
// const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.
//     __REDUX_DEVTOOLS_EXTENSION__());

// Checking whether the module '__REDUX_DEVTOOLS_EXTENSION__COMPOSE__' is existed
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// Assoicate database, browser redux-dev-tools, and redux-thunk extension together in 'store'
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));

export default store