import { StackNavigator } from 'react-navigation';
import MovementsListScreen from '../modules/movementsList/components/MovementsListScreen';
import MovementDetailsScreen from '../modules/movementsDetails/components/MovementDetailsScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: MovementsListScreen,
  },
  movementDetails: {
    screen: MovementDetailsScreen,
  },
});

export default RootNavigator;
