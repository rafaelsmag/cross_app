import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../modules/home/components/HomeScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default RootNavigator;
