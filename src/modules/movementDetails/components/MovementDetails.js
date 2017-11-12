import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const MovementDetail = ({ movement }) => {
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: movement.image }} style={{ flex: 1 }} />
      <Text style={{ flex: 1 }}>{movement.title}</Text>
    </View>
  );
};

MovementDetail.propTypes = {
  movement: PropTypes.shape({
    key: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovementDetail;
