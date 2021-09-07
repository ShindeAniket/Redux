import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import gameReducer from "./reducers/gameReducer";
import personReducer from "./reducers/personReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
// Combine multiple reducer
const AllReducers = combineReducers({
  game: gameReducer,
  person: personReducer,
  users: userReducer
});

//InitialState
const InitialStates = {
  game: { sport: "Football" },
  person: { name: "Andya" },
  users: []
};

const middleware = [thunk];

//creating a redux store
const store = createStore(
  AllReducers,
  InitialStates,
  compose(applyMiddleware(...middleware))
);
export default store;
