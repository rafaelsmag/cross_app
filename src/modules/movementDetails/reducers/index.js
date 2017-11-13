import { UPDATE_MOVEMENT_DETAILS } from '../actions/types';
import { updateMovementDetails } from './reducers';

const initialState = {
  movementDetails: {},
};

export default function reducer(movementDetailsState = initialState, action) {
  switch (action.type) {
    case UPDATE_MOVEMENT_DETAILS:
      return updateMovementDetails(movementDetailsState, action);
    default:
      return movementDetailsState;
  }
}

