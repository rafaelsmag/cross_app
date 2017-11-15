/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

const SPACING = 4;

export const MovementsListStyle = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
    paddingTop: SPACING / 2,
    paddingHorizontal: SPACING / 2,
    backgroundColor: '#eeeeee',
  },
  headerTitle: {
    color: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3f3f3f',
  }
});

export const MovementsItemStyle = StyleSheet.create({
  itemContainer: {
    aspectRatio: 1,
    flex: 1,
    margin: SPACING / 2,
  },
  itemImageBackground: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  itemToast: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
  },
  itemTitleContainer: {
    paddingHorizontal: 16,
  },
  itemTitle: {
    // flex: 1,
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
