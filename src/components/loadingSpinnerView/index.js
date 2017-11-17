import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import LoadingSpinner from '../loadingSpinner/';

const LoadingSpinnerView = (props) => {
  const { isLoading, children, spinnerStyle } = props;
  return (
    <View style={{ flex: 1 }} >
      {isLoading ? <LoadingSpinner style={spinnerStyle} /> : children}
    </View>
  );
};

LoadingSpinnerView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  spinnerStyle: PropTypes.object,
  children: PropTypes.node.isRequired
};

LoadingSpinnerView.defaultProps = {
  isLoading: false,
  spinnerStyle: {},
};

export default LoadingSpinnerView;
