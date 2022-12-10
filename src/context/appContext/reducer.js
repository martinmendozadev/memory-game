export const ACTIONS = {
  SET_IS_LOADING: 'SET_IS_LOADING',
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
    default: {
      return {
        ...payload,
      };
    }
  }
}
