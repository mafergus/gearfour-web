import firebase from 'firebase';
import store from "./store";

const config = {
  apiKey: "AIzaSyB_OGJywa5WaHOWho0ca3kNpUugrzV4Vko",
  authDomain: "gearfour-815e9.firebaseapp.com",
  databaseURL: "https://gearfour-815e9.firebaseio.com",
  projectId: "gearfour-815e9",
  storageBucket: "gearfour-815e9.appspot.com",
  messagingSenderId: "998667746764"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("Got user! ", user);
    const authedUser = {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      lastSignInTime: user.metadata.lastSignInTime,
      creationTime: user.metadata.creationTime,
    };
    store.dispatch({ type: "ADD_AUTHED_USER_SUCCESS", user: authedUser });
  } else {
    // No user is signed in.
  }
});

export default firebase;