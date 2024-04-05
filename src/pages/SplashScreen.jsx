import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import splashImg from "../assets/Content.svg";

const SplashScreen = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const timeout = setTimeout(() => navigate("/signup"), 3000);

		return () => clearTimeout(timeout);
	}, [navigate]);

	return (
		<div className="bg-primaryblue h-screen flex justify-center items-center">
			<div className="flex justify-center items-center flex-col animate-bounce">
				<img
					src={splashImg}
					alt="Splash image"
					className="w-[5rem] animate-bounce"
				/>
				<h1 className="font-bold text-[1.5rem] animate-bounce">
					<span className="text-white">Uni</span>Poll
				</h1>
			</div>
		</div>
	);
};

export default SplashScreen;
