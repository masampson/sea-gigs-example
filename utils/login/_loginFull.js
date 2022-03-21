import { useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { logOut, signUp, useAuth, logIn } from "../firebase";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const user = useAuth();

  async function handleSignup() {
    setIsLoading(true);
    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error");
    }
    setIsLoading(false);
  }

  async function handleLogOut() {
    setIsLoading(true);
    try {
      await logOut();
    } catch {
      alert("Error");
    }
    setIsLoading(false);
  }

  async function handleLogIn() {
    setIsLoading(true);
    try {
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error");
    }
    setIsLoading(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Currently {user ? `logged in as ${user.email}.` : "not logged in."}
      </h1>
      <div>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button disabled={isLoading || user !== null} onClick={handleSignup}>
          Sign Up
        </button>
        <button disabled={isLoading || user !== null} onClick={handleLogIn}>
          Log In
        </button>
        <button disabled={isLoading || !user} onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </div>
  );
}
