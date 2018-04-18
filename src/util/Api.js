import firebase from '../database';
import store from '../store';

export function signOut() {
  firebase.auth().signOut()
  .then(() => store.dispatch({ type: "SIGN_OUT_USER" }))
  .catch(error => console.log("Error! ", error));
}