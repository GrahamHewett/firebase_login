import React, { useState } from "react";
import { signInWithGoogle } from "./firebaseUtils";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = event => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div className="signin">
      <h1>I already have an account</h1>
      <h3>Sign In with your email and password</h3>
      <form onSubmit={handleSignIn}>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>Email</label>
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
		<button onClick={signInWithGoogle}>Sign in With Google</button>
      </form>
    </div>
  );
}
