import { UPDATE_PERSON } from "../actions/personActions";

//Created a reducer and They are a pure function of js
const personReducer = (state = {}, { type, payload }) => {
  // console.log(actions);
  switch (type) {
    case UPDATE_PERSON:
      return { name: payload };

    default:
      return state;
  }
};

export default personReducer;
