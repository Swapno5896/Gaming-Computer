import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser,addedProduct, setAddedProduct] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    

const handelGoogleSignIn = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info. name:"",email:"",photoUrl:""})
      var user = result.user;
   
      const {displayName, email,photoURL} = result.user;
      console.log(photoURL);
      const signedInUser = {...loggedInUser}
      signedInUser.name = displayName;
      signedInUser.email = email;
      signedInUser.photoUrl = photoURL;
      
      setLoggedInUser(signedInUser);
      history.replace(from);
      // ...
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      
        alert(errorMessage)
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