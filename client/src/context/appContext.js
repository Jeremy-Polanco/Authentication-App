import React, { useReducer, useContext, useEffect } from 'react';
import reducer from './reducer';
import {
  TOGGLE_MEMBER,
  TOGGLE_THEME,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from './actions';
import axios from 'axios';

const initialState = {
  user: '',
  isMember: false,
  isLoading: false,
  theme: localStorage.getItem('theme') || 'light',
  alertType: '',
  alertText: '',
  showAlert: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2500);
  };

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };
  const toggleIsMember = () => {
    dispatch({ type: TOGGLE_MEMBER });
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user } = data;
      console.log(data);

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, endPoint, alertText },
      });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { alertText: error.response.data.message },
      });
      console.log(error);
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{ ...state, toggleTheme, toggleIsMember, setupUser, displayAlert }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
