import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import { MovementsItemStyle as s } from '../styles';

class MovementsItem extends Component {

  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    image: '',
    title: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      isAwesome: true,
    };
  }

  render() {
    const { image, title } = this.props;
    return (
      <View style={s.itemContainer}>
        <ImageBackground style={s.itemImageBackground} source={{ uri: image }}>
          <View style={s.itemToast}>
            <View style={s.itemTitleContainer}>
              <Text numberOfLines={1} style={s.itemTitle}>{title}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default MovementsItem;
