import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingSpinnerView from '../../../components/loadingSpinnerView';
import MovementsList from '../components/MovementsList';
import { MovementsListStyle } from '../styles';

import { fetchMovementsList } from '../actions/index';

class MovementsListScreen extends Component {

  static propTypes = {
    fetchMovementsList: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    listMovements: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  static defaultProps = {
    listMovements: [],
    isLoading: false,
  };

  static navigationOptions = {
    title: 'CrossFit',
    headerTitleStyle: MovementsListStyle.headerTitle,
    headerStyle: MovementsListStyle.header,
  }

  componentDidMount() {
    this.props.fetchMovementsList();
  }

  onPressItem = ({ key }) => {
    console.log(key);
    this.props.navigation.navigate('MovementDetails', { _id: key });
  }


  render() {
    return (
      <View style={MovementsListStyle.screenContainer}>
        <StatusBar barStyle={'light-content'} />
        <LoadingSpinnerView isLoading={this.props.isLoading}>
          <MovementsList
            list={this.props.listMovements}
            numColumns={2}
            onPressItem={this.onPressItem}
          />
        </LoadingSpinnerView>
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
