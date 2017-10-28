import React, { Component } from 'react';
import { View, Text } from 'react-native';
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

  render() {
    console.log(this.props.listMovements);
    return (
      <View>
        <Text>
          Olá mundo do CrossFit!
        </Text>
      </View>
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
