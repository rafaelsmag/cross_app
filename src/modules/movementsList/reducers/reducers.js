/* eslint-disable import/prefer-default-export */
export function saveMovements(state, { payload }) {
  return { ...state.movements, movements: payload };
}
