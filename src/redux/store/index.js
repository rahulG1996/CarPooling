import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import LocationReducer from '../reducer/locationReucer';

const rootReducer = combineReducers({
  LocationReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export {store};
