import {createStore} from 'redux';
import {rootReducer} from './rootReducer';

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//regex(how to use)
//let var cont
//how js run(background,compile).
//8984100412

