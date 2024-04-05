import { useState, useEffect, } from 'react';
import { Link, createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import SignUpPage, { action as signUpAction } from './pages/SignUp';
import SignInPage, { action as signInAction } from './pages/SignIn';
import {  connectFirestoreEmulator, getFirestore, } from "firebase/firestore";
import { onAuthStateChanged, getAuth, connectAuthEmulator, } from "firebase/auth";
import { app } from "./firebase";


export default function App() {

  const [userId, setUserId] = useState(null);

  const db = getFirestore();

  useEffect(() => {
    const auth = getAuth(app);
    const observer = onAuthStateChanged(auth, user => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    if (location.hostname === "localhost") {
      connectAuthEmulator(auth, "http://localhost:9099");
      connectFirestoreEmulator(db, "localhost", "5174");
    }

    return () => observer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" />
        <Route 
          path="/signup" 
          element={<SignUpPage />} 
          action={signUpAction}
        />
        <Route 
          path="/signin" 
          element={<SignInPage />} 
          action={signInAction}
        />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
