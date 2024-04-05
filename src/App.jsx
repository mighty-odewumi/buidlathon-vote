import { useState, useEffect } from "react";
import {
	Link,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import SignUpPage, {
	// action as signUpAction,
	// loader as signUpLoginLoader,
} from "./pages/SignUp";
import SignInPage, {
	action as signInAction,
	loader as signInLoginLoader,
} from "./pages/SignIn";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import {
	onAuthStateChanged,
	getAuth,
	connectAuthEmulator,
} from "firebase/auth";
import Dashboard from "./pages/Dashboard";
import PollInfo from "./pages/PollInfo";

import SplashScreen from "./pages/SplashScreen";

import { app } from "./firebase";
import CreatePoll from './pages/CreatePoll';
// import VoteInterface from "./pages/VoteInterface";
import VoteMe from "./pages/VoteMe";

export default function App() {
	const [userId, setUserId] = useState(null);

	const db = getFirestore();

	// localStorage.clear();

	useEffect(() => {
		const auth = getAuth(app);
		const observer = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				setUserId(null);
			}
		});

		// if (location.hostname === "localhost") {
		// 	connectAuthEmulator(auth, "http://localhost:9099");
		// 	connectFirestoreEmulator(db, "localhost", "5174");
		// }

		return () => observer();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        <Route 
          path="/signup" 
          element={<SignUpPage />} 
          // action={signUpAction}
          // loader={signUpLoginLoader}
        />
        <Route 
          path="/signin" 
          element={<SignInPage />} 
          action={signInAction}
          loader={signInLoginLoader}
        />
        <Route 
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route 
          path="create"
          element={<CreatePoll />}
        />
        <Route 
          path="my-polls"
          element={<h1>My polls</h1>}
        />

				<Route
					path="/"
					element={
					<SplashScreen />}
				/>
				<Route path="/pollinfo" element={<PollInfo />} />
        <Route path="/poll" element={<VoteMe />} />
      </>
    )
  );

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
