import counter from './counter';
import isLogged from './isLogged';
import {combineReducers} from 'redux'; //Used to combine all reducers into one reducer

const reducers = combineReducers({
    counter, 
    isLogged
})

export default reducers;