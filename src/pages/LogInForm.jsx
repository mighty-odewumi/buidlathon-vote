/* eslint-disable react/prop-types */
// import { useState } from "react";
import { Form, Link } from "react-router-dom";
import email from "../assets/image3.svg";
import password from "../assets/image1.svg";
import name from "../assets/image2.svg";

export default function Onboarding({
	errors,
	navigation,
	queryString,
	pathname,
	handleActionChange,
	handleSubmit,
	action,
}) {
	// const [pollAction, setPollAction] = useState("vote");

	return (
		<>
			<div className="font-inter p-6 md:w-96 md:m-auto">
				<h1 className="font-bold text-3xl mb-3 mt-10 text-primaryblue">
					Login
				</h1>

				<p className="font-medium text-md mb-8 mt-2">
					Signin to your account
				</p>

				{queryString && (
					<h3 className="mt-4 mb-4 text-xl text-red-800">
						{queryString}
					</h3>
				)}

				<form method="post" onSubmit={handleSubmit}>
					<div className="relative mb-4 ring-2 rounded-md">
						<img
							src={email}
							alt="email icon"
							className="w-4 absolute top-3 left-3"
						/>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email e.g. joshuaode@gmail.com"
							required
							className="bg-gray-100 w-full  py-2 px-9 rounded-md"
						/>

						{errors?.email && (
							<span className="text-sm ">{errors.email}</span>
						)}
					</div>

					<div className="relative mb-4 ring-2 rounded-md">
						<img
							src={password}
							alt="password icon"
							className="w-4 absolute top-3 left-3"
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password e.g. i'llB37h@"
							required
							className="bg-gray-100 w-full py-2 px-9 rounded-md"
						/>
						{errors?.password && (
							<span className="text-sm ">{errors.password}</span>
						)}
					</div>

					{pathname === "/signup" && (
						<div className="relative mb-4 ring-2 rounded-md">
							<img
								src={name}
								alt="name icon"
								className="w-4 absolute top-3 left-3"
							/>
							<input
								type="name"
								name="name"
								id="name"
								placeholder="Your name e.g. Joshua Odetunde"
								// required
								className="bg-gray-100 w-full py-2 px-9 rounded-md"
							/>
							{errors?.name && (
								<span className="text-sm ">{errors.name}</span>
							)}
						</div>
					)}

					<div className="mb-4 flex flex-col ring rounded-md p-4">
						<label
							htmlFor="admin"
							className="inline-flex items-center mb-2"
						>
							<input
								type="radio"
								name="actionSelect"
								id="admin"
								value="create"
								checked={action === 'create'}
								onChange={handleActionChange}
								className="h-4 w-4 text-primaryblue"
							/>
							&nbsp; Create a poll
						</label>

						<label
							htmlFor="voter"
							className="inline-flex items-center"
						>
							<input
								type="radio"
								name="actionSelect"
								id="voter"
								value="vote"
								checked={action === 'vote'}
								onChange={handleActionChange}
								className="h-4 w-4 text-primaryblue"
							/>
							&nbsp; Vote on a poll
						</label>

						{errors?.pollAction && (
							<span className="text-sm ">
								{errors.pollAction}
							</span>
						)}
					</div>

					<button
						className="rounded-md bg-primaryblue text-white py-2 px-4 w-full mb-4 hover:bg-bluegradient transition-all"
						disabled={navigation?.state === "submitting"}
					>Sign in
						{/* {pathname === "/signin"
							? navigation?.state === "submitting"
								? "Signing in..."
								: "Sign in"
							: navigation?.state === "submitting"
							? "Signing up..."
							: "Sign up"} */}
					</button>

					{errors?.firebaseErr && (
						<span className="text-red-800 text-xl mb-2 block">
							{errors.firebaseErr}
						</span>
					)}
				</form>

				<p className="text-center">
					
						<>
							<span>Don&apos;t have an account?</span>

							<Link to="/signup" className="text-primaryblue">
								&nbsp;Sign up
							</Link>
						</>
				</p>
			</div>
		</>
	);
}
