import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'CrossFit',
    headerTitleStyle: {
      color: '#f5f5f5'
    },
    headerStyle: {
      backgroundColor: '#3f3f3f'
    },
  }

  render() {
    return (
      <View>
        <Text>
          Olá mundo do CrossFit!
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
