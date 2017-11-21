import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import SwiperMedia from '../../../components/swiperMedia';

const MovementDetail = ({ movement }) => {
  return (
    <View style={{ flex: 1 }}>
      <SwiperMedia itens={[{ type: 'image', source: { uri: movement.image } }, { type: 'image', source: { uri: movement.image } }, { type: 'image', source: { uri: movement.image } }]} />
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
