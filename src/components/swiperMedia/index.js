import React, { Component } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import colors from '../../modules/theme/colors';


class SwiperMedia extends Component {

  /* eslint-disable class-method-use-this */
  renderIten(item, index) {
    if (item.type === 'image') {
      return (
        <Image resizeMode={'cover'} source={item.source} style={{ flex: 1 }} key={index} />
      );
    }
    return null;
  }

  renderItensSwiper() {
    const { itens } = this.props;
    return (
      <Swiper
        loop={false}
        dotColor={colors.whiteSecondary}
        activeDotColor={colors.primaryColor}
      >
        {itens.map(this.renderIten)}
      </Swiper>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderItensSwiper()}
      </View>
    );
  }
}

SwiperMedia.propTypes = {
  itens: PropTypes.array.isRequired,
};

export default SwiperMedia;
