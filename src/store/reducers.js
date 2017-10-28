import { combineReducers } from 'redux';
import RootNavigator from '../router/Routes';
import home from '../modules/home/reducers/index';

const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Home'));

const NavReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

const reducers = combineReducers({
  nav: NavReducer,
  home,
});

export default reducers;

