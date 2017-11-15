import { UPDATE_MOVEMENT_DETAILS } from './types';
import { getMovementDetails } from '../../../services/movements';

export function fetchMovementDetails(_id) {
  return async (dispatch) => {
    const movementDetails = await getMovementDetails(_id);
    dispatch(updateMovementDetails(movementDetails));
  };
}

export function updateMovementDetails(movementDetails) {
  return {
    type: UPDATE_MOVEMENT_DETAILS,
    payload: movementDetails,
  };
}
