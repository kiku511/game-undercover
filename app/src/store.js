import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';

export const history = createHistory();

const initialState = {};

const composedEnhancers = compose(applyMiddleware(thunk, logger()));

export default createStore(reducers, initialState, composedEnhancers);
