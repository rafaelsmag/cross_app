import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MovementsListStyle } from '../styles';

import { fetchMovementsList } from '../actions/index';

import MovementsItem from './MovementsItem';

class MovementsListScreen extends Component {

  static propTypes = {
    fetchMovementsList: PropTypes.func.isRequired,
    listMovements: PropTypes.array.isRequired
  };

  static defaultProps = {
    listMovements: []
  };

  static navigationOptions = {
    title: 'CrossFit',
    headerTitleStyle: MovementsListStyle.headerTitle,
    headerStyle: MovementsListStyle.header,
  }

  componentDidMount() {
    this.props.fetchMovementsList();
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
    return (
      <View>
        <StatusBar barStyle={'light-content'} />
        <FlatList
          contentContainerStyle={MovementsListStyle.listContainer}
          data={this.props.listMovements}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          numColumns={2}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovements: state.movementsList.movements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMovementsList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovementsListScreen);
