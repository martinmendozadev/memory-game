import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useCallback,
} from 'react';

import { ACTIONS, appContextReducer } from './reducer';

const AppContext = createContext();

export const initialState = {
  isLoading: false,
};

export function AppContextProvider({ value, initialValues, children }) {
  const [state, dispatch] = useReducer(appContextReducer, {
    ...initialState,
    ...initialValues,
  });

  const setIsLoading = useCallback(
    (isLoading) =>
      dispatch({
        type: ACTIONS.SET_IS_LOADING,
        payload: { isLoading },
      }),
    []
  );

  const contextState = useMemo(
    () => ({
      ...state,
      ...value,
      setIsLoading,
    }),
    [state, value, setIsLoading]
  );

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
