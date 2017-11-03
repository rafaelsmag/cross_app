import React from 'react';
import { StackNavigator } from 'react-navigation';
import MovementsListScreen from '../modules/movementsList/components/MovementsListScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: MovementsListScreen,
  },
});

export default RootNavigator;
