/* eslint-disable import/prefer-default-export */
export function updateMovementDetails(state, { payload }) {
  return { ...state, movementDetails: payload };
}
