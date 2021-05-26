import {combineReducers} from 'redux';
import {rewardsReducer} from './rewards';

export const reducers = combineReducers({
  rewards: rewardsReducer,
});
