import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovementsList } from '../actions/index';

class HomeScreen extends Component {

  static propTypes = {
    fetchMovementsList: PropTypes.func.isRequired,
    listMovements: PropTypes.array.isRequired
  };

  static defaultProps = {
    listMovements: []
  };

  static navigationOptions = {
    title: 'CrossFit',
    headerTitleStyle: {
      color: '#f5f5f5'
    },
    headerStyle: {
      backgroundColor: '#3f3f3f'
    },
  }

  componentDidMount() {
    this.props.fetchMovementsList();
  }

  renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={{ flex: 1, height: 200 }}>
        <ImageBackground style={{ width: '100%', flex: 1 }} source={{ uri: item.image }}>
          <Text >{item.title}</Text>
        </ImageBackground>
      </View>
    );
  }

  keyExtractor = item => item.key

  render() {
    return (
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        data={this.props.listMovements}
        extraData={this.state}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={2}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listMovements: state.home.movements,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMovementsList }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
