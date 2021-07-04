import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ListTodosReducer } from './reducers/listTodosReducers';

const intialState = {};
const middilware = [thunk];

const Reducers = combineReducers({
  Todos: ListTodosReducer,
});

const Store = createStore(
  Reducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middilware)),
);

export default Store;
