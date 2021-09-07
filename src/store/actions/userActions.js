// create a action
export const UPDATE_USER = "UPDATE_USER";

const fetch_user = (dispatch) => {
  // fetch
  fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((res) => dispatch({ type: UPDATE_USER, payload: res.data }));
};

// const update_reducer = { type: "UPDATE_USER", payload: "Aniiket !" };

export default fetch_user;
