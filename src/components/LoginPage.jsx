import React, { Component } from 'react';
import 'components/LoginPage.css';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { primaryColor } from 'util/colors';
import firebase from '../database';

export default class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onSubmit = () => {
    const { username, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(user => {
      debugger;
    })
    .catch(error => {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      console.log("Error! ", error);
    });
  };

  updateUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  updatePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  onKeyDown = (e) => {
    switch (e.keyCode) {
      case 13: // enter
        this.onSubmit();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="App" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onKeyDown={this.onKeyDown}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="logo" alt="logo" />
          <h1 style={{ display: "inline-block", fontWeight: "normal", marginLeft: 15 }}>Gearfour</h1>
        </div>
        <div>
          <TextField
            style={{ width: 250, marginBottom: 20 }}
            placeholder="Username"
            label="Username"
            onChange={this.updateUsername}
            value={this.state.username}
          />
          <br/>
          <TextField
            style={{ width: 250 }}
            label="Password"
            placeholder="Password"
            type="password"
            onChange={this.updatePassword}
            value={this.state.password}
          />
          <br/>
          <Button
            style={{ marginTop: 40, color: "white", backgroundColor: primaryColor }}
            variant="raised"
            onClick={this.onSubmit}
            fullWidth
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
