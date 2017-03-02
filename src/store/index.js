import { combineReducers } from 'redux';
//import { reducer as movies } from './movies';
import { createStore } from 'redux'
import AuthReducer from './reducers/authReducer';


export const rootReducer = combineReducers({
    AuthReducer
// more reducers go here
})

export let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );