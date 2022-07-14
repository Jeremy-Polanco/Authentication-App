import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import { TOGGLE_MEMBER, TOGGLE_THEME } from './actions';

const initialState = {
  user: '',
  isLoading: false,
  theme: 'dark',
  isMember: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };
  const toggleIsMember = () => {
    dispatch({ type: TOGGLE_MEMBER });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleTheme, toggleIsMember }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
