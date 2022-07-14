import { TOGGLE_THEME, TOGGLE_MEMBER } from './actions';

const reducer = (state, action) => {
  if (action.type === TOGGLE_THEME) {
    return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
  }
  if (action.type === TOGGLE_MEMBER) {
    return { ...state, isMember: !state.isMember };
  }

  throw new Error('Action type not found');
};

export default reducer;
