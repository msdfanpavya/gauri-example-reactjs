import reducers from "../reducer/TableRaducer";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


export const store= createStore(reducers, applyMiddleware(thunk));