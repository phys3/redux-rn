export const GET_REWARDS = '[rewards] GET';
export const FETCH_REWARDS_SUCCESS = '[rewards] Fetch Success';
export const FETCH_REWARDS_ERROR = '[rewards] Fetch Error';
export const COLLECT_REWARD = '[rewards] Collect';
export const UPDATE_AVAILABLE_REWARDS = '[rewards] Update';

export const getRewards = () => ({
  type: GET_REWARDS,
});

export const collectReward = data => ({
  type: COLLECT_REWARD,
  payload: data,
});

export const updateAvailableRewards = data => ({
  type: UPDATE_AVAILABLE_REWARDS,
  payload: data,
});
