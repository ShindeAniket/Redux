import { UPDATE_GAME } from "../actions/gameActions";

const gameReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_GAME:
      return { sport: payload };
    default:
      return state;
  }
};

export default gameReducer;
