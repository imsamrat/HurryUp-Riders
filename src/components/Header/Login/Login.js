import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';
import { UserContext } from '../../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email}
                setUser(user);
                setLoggedInUser(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email);
            });
    }

    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = () => {
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign in using Google</button>
            <h3>email:  {user.email}</h3>
            <h1>Create An Account</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onBlur={handleBlur} placeholder="Enter your Email Address" required />
                <br />
                <input type="password" name="password" id="" onBlur={handleBlur} placeholder="Enter your Email Address" required />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Login;