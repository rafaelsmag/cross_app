import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovementDetails } from '../actions';

class MovementDetailsScreen extends Component {
  componentDidMount() {
    const { fetchMovementDetails, _id } = this.props;
    fetchMovementDetails(_id);
  }

  render() {
    const { movement } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Image source={{ uri: movement.image }} />
        <Text>{movement.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movement: state.movementDetails.movementDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovementDetails: dispatch(fetchMovementDetails),
  };
};

MovementDetailsScreen.propTypes = {
  fetchMovementDetails: PropTypes.func.isRequired,
  movement: PropTypes.object.isRequired,
  _id: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovementDetailsScreen);
