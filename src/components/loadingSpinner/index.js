import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import colors from '../../modules/theme/colors';

const LoadingSpinner = (props) => {
  const { spinnerColor, spinnerSize, style } = props;
  return (
    <View style={[style, { flex: 1, justifyContent: 'center' }]}>
      <ActivityIndicator color={spinnerColor} size={spinnerSize} />
    </View>
  );
};

LoadingSpinner.propTypes = {
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.string,
  style: PropTypes.object,
};

LoadingSpinner.defaultProps = {
  spinnerColor: colors.whitePrimary,
  spinnerSize: 'large',
  style: {},
};

export default LoadingSpinner;
