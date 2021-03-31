import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);
const LogIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

const handelGoogleSignIn = () =>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}


    
    return (
        <div>
            <h2>this is log in</h2>
            <button onClick={handelGoogleSignIn}>LogIn with google</button>
        </div>
    );
};
// npm install -g firebase-tools
export default LogIn;