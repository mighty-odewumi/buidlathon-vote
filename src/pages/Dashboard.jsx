import { Link } from "react-router-dom";
import menu from "../assets/menu.svg";
import profile from "../assets/profile.svg";
import background from "../assets/bg-img.svg";

export default function Dashboard() {
	return (
		<>
			<div
				className="bg-scroll bg-cover h-screen"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="flex justify-between p-6 px-[1.5rem]">
					<img src={menu} alt="Menu" className="w-6 h-6" />

					<img src={profile} alt="Profile" className="w-6 h-6" />
				</div>
				<div className="mx-[1.5rem]">
					<div className="text-center text-white">
						<h1 className="text-4xl font-bold mb-4 mt-[4rem] min-w-[65%] max-w-[75%] text-left">
							Welcome to UniPoll! Your voice counts here.
						</h1>
					</div>
					<div className="flex gap-[2rem] mt-[2rem] ">
						<Link
							to="/create"
							className="bg-white p-[0.5rem] px-[1.4rem] rounded-[0.5rem] text-[0.87rem] font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 active:bg-blue-900 active:text-white"
							href=""
						>
							Create poll
						</Link>
						<Link className="bg-white p-[0.5rem] px-[1.4rem] rounded-[0.5rem] text-[0.87rem] font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 active:bg-blue-900 active:text-white">
							View Poll
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
