import React from "react";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <button onClick={firebase.signOut} type="button">
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);
