import {
  TOGGLE_THEME,
  TOGGLE_MEMBER,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
} from './actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_THEME) {
    return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
  }
  if (action.type === TOGGLE_MEMBER) {
    return { ...state, isMember: !state.isMember };
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.alertText,
    };
  }

  throw new Error('Action type not found');
};

export default reducer;
