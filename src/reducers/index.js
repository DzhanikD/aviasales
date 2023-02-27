import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import ticketsReducer from './ticketsReducer';
import checkboxReducer from './checkboxReducer';

const rootReducer = combineReducers({
  ticketsReducer,
  checkboxReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
