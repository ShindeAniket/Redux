import "./styles.css";
import update_person from "./store/actions/personActions";
import update_game from "./store/actions/gameActions.js";
import { connect } from "react-redux";
import fetch_user from "./store/actions/userActions";

function App(props) {
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      person Name : {props.person.name}
      <br />
      <button onClick={props.updatePerson}>Update Person</button>
      <br />
      Game Sport Name : {props.game.sport}
      <br />
      <button onClick={props.updateGame}>Update Game</button>
      <br />
      <h2>Fetch user with below button</h2>
      Fecthing user's : <button onClick={props.fetchUsers}>Fecth Users</button>
      {props.users.length === 0 ? (
        <p>No user found</p>
      ) : (
        props.map((user) => (
          <p key={user.id}>
            {user.id} - {user.first_name}- {user.email}
          </p>
        ))
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
    person: state.person,
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGame: () => {
      dispatch(update_game);
    },
    updatePerson: () => {
      dispatch(update_person);
    },
    fetchUsers: () => {
      dispatch(fetch_user);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
