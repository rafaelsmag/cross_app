/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';


export const MovementsListStyle = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
    height: 200,
    padding: 5,
  },
  itemImageBackground: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  itemTitleContainer: {
    backgroundColor: '#ffffff55',
  },
  itemTitle: {
    fontSize: 18,
    color: 'black',
  },
  headerTitle: {
    color: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3f3f3f',
  }
});
