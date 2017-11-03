import { UPDATE_MOVEMENTS_LIST } from '../actions/types';
import { saveMovements } from './reducers';

export const initialState = {
  movements: [],
};

export default function reducer(listMovementsState = initialState, action) {
  switch (action.type) {
    case UPDATE_MOVEMENTS_LIST:
      return saveMovements(listMovementsState, action);
    default:
      return listMovementsState;
  }
}
