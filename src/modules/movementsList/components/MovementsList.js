import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import { MovementsListStyle } from '../styles';


import MovementsItem from './MovementsItem';

class MovementsListScreen extends Component {

  static propTypes = {
    numColumns: PropTypes.number,
    list: PropTypes.array.isRequired,
    navigation: PropTypes.object,
  };

  static defaultProps = {
    numColumns: 1,
    navigation: {},
  };

  onPressItem = ({ key }) => {
    this.props.navigation.navigate('MovementDetails', { _id: key });
  }

  renderItem = ({ item }) => {
    return (
      <MovementsItem
        image={item.image}
        title={item.title}
      />
    );
  }

  keyExtractor = item => item.key

  render() {
    const { list, numColumns } = this.props;
    return (
      <FlatList
        contentContainerStyle={MovementsListStyle.listContainer}
        data={list}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={numColumns}
      />
    );
  }
}


export default MovementsListScreen;
