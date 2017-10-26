import { combineReducers } from 'redux';
import RootNavigator from '../router/Routes';

const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Home'));

const NavReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

const reducers = combineReducers({
  nav: NavReducer,
});

export default reducers;

