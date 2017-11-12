import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MovementsListStyle } from '../styles';

import { fetchMovementsList } from '../actions/index';

class MovementsListScreen extends Component {

  static propTypes = {
    fetchMovementsList: PropTypes.func.isRequired,
    listMovements: PropTypes.array.isRequired
  };

  static defaultProps = {
    listMovements: []
  };

  static navigationOptions = {
    title: 'CrossFit',
    headerTitleStyle: MovementsListStyle.headerTitle,
    headerStyle: MovementsListStyle.header,
  }

  componentDidMount() {
    this.props.fetchMovementsList();
  }

  // onPressItem = ({ key }) => {
  //   this.props.navigation.navigate('MovementDetails', { _id: key });
  // }

  renderItem = ({ item }) => {
    return (
      // <TouchableOpacity style={MovementsListStyle.itemContainer} onPress={() => this.onPressItem(item)}>
      <View style={MovementsListStyle.itemContainer}>
        <ImageBackground style={MovementsListStyle.itemImageBackground} source={{ uri: item.image }}>
          <View style={MovementsListStyle.itemTitleContainer}>
            <Text
              style={MovementsListStyle.itemTitle}
            >{item.title}</Text>
          </View>
        </ImageBackground>
      </View>
      // </TouchableOpacity >
    );
  }

  keyExtractor = item => item.key

  render() {
    return (
      <FlatList
        contentContainerStyle={MovementsListStyle.listContainer}
        data={this.props.listMovements}
        extraData={this.state}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        numColumns={2}
      />
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
