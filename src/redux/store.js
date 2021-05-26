import {applyMiddleware, createStore, compose} from 'redux';
import {reducers} from './reducers';
import {rewardsMdl} from './middleware/rewards';
import {api} from './middleware/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...rewardsMdl, api)),
);
