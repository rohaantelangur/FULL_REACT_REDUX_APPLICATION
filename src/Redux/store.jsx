import reducer from "./reducer";
import Authreducer from "./AuthReducer/reducer";
import thunk from 'redux-thunk'
import {applyMiddleware, legacy_createStore, combineReducers} from 'redux'

const rootreducer = combineReducers({reducer,Authreducer})
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk))