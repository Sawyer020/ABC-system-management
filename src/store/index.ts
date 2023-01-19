import { legacy_createStore, combineReducers} from "redux"
import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"

// Combind reducers with different module
const reducers = combineReducers({
    handleNum,
    handleArr 
})

//Create database
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
It's for the browser runs extension 'redux dev tools'
*/
const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.
    __REDUX_DEVTOOLS_EXTENSION__());

export default store