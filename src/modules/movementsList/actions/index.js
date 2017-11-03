import { UPDATE_MOVEMENTS_LIST } from './types';
import { getMovements } from '../../../services/movements';

export function fetchMovementsList() {
  return async (dispatch) => {
    const movements = await getMovements();
    dispatch(updateMovementsAction(movements));
  };
}

export function updateMovementsAction(movements) {
  return {
    type: UPDATE_MOVEMENTS_LIST,
    payload: movements,
  };
}
