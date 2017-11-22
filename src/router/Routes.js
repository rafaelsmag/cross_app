import { StackNavigator } from 'react-navigation';
import MovementsListScreen from '../modules/movementsList/containers/MovementsListScreen';
import MovementDetailsScreen from '../modules/movementDetails/containers/MovementDetailsScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: MovementsListScreen,
  },
  MovementDetails: {
    screen: MovementDetailsScreen,
  },
});

export default RootNavigator;
