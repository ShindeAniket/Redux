import { UPDATE_USER } from "../actions/personActions";

//Created a reducer and They are a pure function of js
const userReducer = (state = {}, { type, payload }) => {
  // console.log(actions);
  switch (type) {
    case UPDATE_USER:
      return payload;

    default:
      return state;
  }
};

export default userReducer;
