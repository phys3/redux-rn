import {
  FETCH_REWARDS_SUCCESS,
  FETCH_REWARDS_ERROR,
  GET_REWARDS,
  updateAvailableRewards,
} from '../actions/rewards';
import {apiRequest} from '../actions/api';

const URL = 'https://staging.helloagain.at/api/v1/clients/5189/bounties/';

export const getRewardsFlow =
  ({dispatch}) =>
  next =>
  action => {
    next(action);

    if (action.type === GET_REWARDS) {
      dispatch(
        apiRequest(
          'GET',
          URL,
          null,
          FETCH_REWARDS_SUCCESS,
          FETCH_REWARDS_ERROR,
        ),
      );
    }
  };

export const processSuccessfulFetchRewards =
  ({dispatch}) =>
  next =>
  action => {
    next(action);

    if (action.type === FETCH_REWARDS_SUCCESS) {
      dispatch(updateAvailableRewards(action.payload));
    }
  };

export const rewardsMdl = [getRewardsFlow, processSuccessfulFetchRewards];
