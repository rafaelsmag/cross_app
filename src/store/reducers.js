import { combineReducers } from 'redux';
import RootNavigator from '../router/Routes';
import movementsList from '../modules/movementsList/reducers/index';
import movementDetails from '../modules/movementDetails/reducers/index';


const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Home'));

const NavReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  return nextState || state;
};

const reducers = combineReducers({
  nav: NavReducer,
  movementsList,
  movementDetails,
});

export default reducers;

