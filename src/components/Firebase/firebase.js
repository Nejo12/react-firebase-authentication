import app from "firebase/app";
import "firebase/auth";

const config = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
  apiKey: "AIzaSyAwLr8FChNiZUE3nfn_GOmEfkR85McPOSA",
  authDomain: "react-authentication-225c5.firebaseapp.com",
  databaseURL: "https://react-authentication-225c5.firebaseio.com",
  projectId: "react-authentication-225c5",
  storageBucket: "react-authentication-225c5.appspot.com",
  messagingSenderId: "1059171840276",
  appId: "1:1059171840276:web:c9779578a7a89864ff1201",
  measurementId: "G-FVCSSLKM2Z"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***
  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  passwordChange = password => this.auth.currentUser.updatePassword(password);

  passwordReset = email => this.auth.sendPasswordResetEmail(email);
}

export default Firebase;
