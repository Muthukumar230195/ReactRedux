import { createStore } from 'redux'
import reducerFunction from '../reducers/reducer'


const store=createStore(reducerFunction);

export default store;
