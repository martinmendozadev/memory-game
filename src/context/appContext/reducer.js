export const ACTIONS = {
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_ERROR_MATCHING_CARDS: 'SET_ERROR_MATCHING_CARDS',
};

export function appContextReducer(state, { type: actionType, payload }) {
  switch (actionType) {
    case ACTIONS.SET_IS_LOADING: {
      const { isLoading } = payload;
      return {
        ...state,
        isLoading,
      };
    }
    case ACTIONS.SET_ERROR_MATCHING_CARDS: {
      const { isErrorMatching } = payload;
      return {
        ...state,
        isErrorMatching,
      };
    }
    default: {
      return {
        ...payload,
      };
    }
  }
}
