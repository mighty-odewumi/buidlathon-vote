/* eslint-disable react-refresh/only-export-components */
import {
	useActionData,
	useLoaderData,
	useNavigate,
	useNavigation,
} from "react-router-dom";
import Onboarding from "./Onboarding";
import { authSignUp } from "../auth/authSignUp";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export async function loader({ request }) {
	const url = new URL(request.url).searchParams.get("message");
	const pathname = new URL(request.url).pathname;
	return [url, pathname];
}

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	const name = formData.get("name");
	const pollAction = formData.get("actionSelect");
	console.log(email, password, name, pollAction);

	const errors = {};

	if (typeof email !== "string" || !email.includes("@")) {
		errors.email = "That doesn't look like an email! :)";
	}

	if (typeof password !== "string" || password.length < 8) {
		errors.password = "Your password is less than 8 characters! ;)";
	}

	if (name === "") {
		errors.name = "Please input your name! ;)";
	}

	if (pollAction === "") {
		errors.pollAction = "Please select what you would love to do! ;)";
	}

	if (Object.keys(errors).length) {
		return errors;
	}

	try {
		const data = await authSignUp(email, password, name);
		console.log(data);
	} catch (err) {
		console.log(err);
		(errors.firebaseErr = "An unknown error occurred!"), err;

		if (err?.errorCode === "auth/network-request-failed") {
			errors.firebaseErr = "You seem to be offline!";
		}

		if (err?.errorCode === "auth/invalid-credential") {
			errors.firebaseErr = "Invalid password or email supplied!";
		}

		if (err?.errorCode === "auth/email-already-in-use") {
			errors.firebaseErr = "Email already in use!";
		}

		return errors;
	}
	return pollAction;
}

export default function SignUpPage() {
	// const auth = getAuth();

	const [pollAction, setPollAction] = useState("");
	console.log(pollAction);

	const loaderData = useLoaderData();
	console.log(loaderData);

	const actionData = useActionData();
	const navigation = useNavigation();
	const navigate = useNavigate();
	const queryString = loaderData[0];
	const pathname = loaderData[1];
	// const pollAction = actionData?.pollAction;

	useEffect(() => {
		const observer = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user);
				localStorage.setItem("loggedIn", true);
				return navigate(
					`/${pollAction === "create" ? "dashboard" : "polls"}`,
					{ replace: true }
				);
			} else {
				localStorage.removeItem("loggedIn");
			}
		});

		return () => observer();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navigate]);

	return (
		<>
			<Onboarding
				errors={actionData}
				navigation={navigation}
				queryString={queryString}
				pathname={pathname}
				pollAction={pollAction}
				setPollAction={setPollAction}
			/>
		</>
	);
}
