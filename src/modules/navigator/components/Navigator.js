import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from '../../../router/Routes';

/* eslint-disable  react/prefer-stateless-function */
class Navigator extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
  }
}

Navigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigator);
