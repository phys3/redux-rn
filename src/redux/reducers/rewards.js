import {UPDATE_AVAILABLE_REWARDS, COLLECT_REWARD} from '../actions/rewards';

const initState = {
  available: [],
  collected: [],
};

export function rewardsReducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_AVAILABLE_REWARDS:
      return {
        available: action.payload,
        collected: [...state.collected],
      };
    case COLLECT_REWARD:
      return {
        available: state.available.filter(
          reward => reward.id !== action.payload.id,
        ),
        collected: [
          ...state.collected,
          ...state.available.filter(reward => reward.id === action.payload.id),
        ],
      };

    default:
      return state;
  }
}
