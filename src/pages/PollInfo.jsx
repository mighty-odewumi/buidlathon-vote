import React from "react";
import background from "../assets/pollinfo-bg.svg";
function PollInfo() {
	const currentYear = new Date().getFullYear();
	const details = {
		Date: "April 5, 2024",
		Time: "10:00 AM",
		"Total Voters": "1000",
		"Vote Casted": "1500",
	};

	const data = {
		John: Math.floor(Math.random() * 100) + 1,
		Alice: Math.floor(Math.random() * 100) + 1,
		Bob: Math.floor(Math.random() * 100) + 1,
		Emma: Math.floor(Math.random() * 100) + 1,
		Michael: Math.floor(Math.random() * 100) + 1,
	};

	return (
		<div
			className="bg-gray-200 min-h-screen flex justify-center "
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
			}}
		>
			<div className="w-4/5 my-[3rem] ">
				<div>
					<h3 className="text-lg font-semibold bg-white text-black border rounded-[1rem] p-[0.8rem]  text-center">
						LEADERSHIP CHOICE {currentYear}
					</h3>
				</div>

				<div className="mt-[3rem]  bg-white border rounded-[1rem] ">
					{Object.entries(details).map(([key, value]) => (
						<div
							key={key}
							className="text-sm flex justify-between px-[1rem]"
						>
							<p className="font-semibold my-[0.8rem]">{key}</p>
							<p className="text-left my-[0.8rem]">{value}</p>
						</div>
					))}
				</div>

				<div className="mt-[3rem]  bg-white border rounded-[1rem] ">
					{Object.entries(data).map(([key, value]) => (
						<div
							key={key}
							className="text-sm flex justify-between px-[1rem]"
						>
							<p className="font-semibold my-[0.8rem]">{key}</p>
							<p className=" font-semibold text-left my-[0.8rem]">
								{value}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default PollInfo;
