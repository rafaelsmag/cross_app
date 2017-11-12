import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovementDetails } from '../actions';
import MovementDetails from '../components/MovementDetails';

class MovementDetailsScreen extends Component {

  componentDidMount() {
    this.props.fetchMovementDetails();
  }

  render() {
    const { movement } = this.props;
    if (typeof movement.key === 'undefined') {
      return null;
    }
    return <MovementDetails movement={movement} />;
  }
}

const mapStateToProps = (state) => {
  return {
    movement: state.movementDetails.movementDetails,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { _id } = ownProps.navigation.state.params;

  return {
    fetchMovementDetails: () => dispatch(fetchMovementDetails(_id)),
  };
};


MovementDetailsScreen.propTypes = {
  fetchMovementDetails: PropTypes.func.isRequired,
  movement: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovementDetailsScreen);
