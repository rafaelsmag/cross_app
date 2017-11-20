import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { MovementsListStyle } from '../styles';


import MovementsItem from './MovementsItem';

class MovementsListScreen extends Component {

  static propTypes = {
    numColumns: PropTypes.number,
    list: PropTypes.array.isRequired,
    onPressItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    numColumns: 1,
    navigation: {},
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.onPressItem(item)}>
        <MovementsItem
          image={item.image}
          title={item.title}
        />
      </TouchableOpacity>
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
