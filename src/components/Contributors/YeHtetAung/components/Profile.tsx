/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Profile } from "../types";

import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Profile = () => {
	const profiles: Profile[] = [
		{
			title: "Zen",
			url: "https://github.com/yellhtetaung",
			icon: FaGithub,
			iconColor: "#1F2328",
		},
		{
			title: "Ye Htet Aung",
			url: "https://www.facebook.com/yehtetaungxzen",
			icon: FaFacebook,
			iconColor: "#0765FF",
		},
		{
			title: "Ye Htet Aung",
			url: "https://www.linkedin.com/in/yellhtetaung2488/",
			icon: FaLinkedin,
			iconColor: "#0B65C2",
		},
		{
			title: "yehtetaung.dev@gmail.com",
			url: "mailto:yehtetaung.dev@gmail.com",
			icon: SiGmail,
			iconColor: "#000000",
		},
	];

	return (
		<div className="w-full md:w-1/2 mb-10 md:me-5 md:mb-0 flex flex-col items-center">
			<img
				src="https://yehtetaung-dev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-image.c39e72b0.jpg&w=384&q=95"
				className="w-[160px] h-[160px] border-4 rounded-full object-cover"
				alt="yehtetaung"
			/>

			<div className="w-full h-full p-5 mt-10 flex justify-center gap-5 md:justify-start md:gap-0 md:flex-col md:bg-[rgba(255,255,255,0.6)] md:backdrop-blur-3xl md:rounded-xl md:shadow-xl">
				{profiles.map((profile) => (
					<a
						href={profile.url}
						target="_blank"
						key={profile.url}
						className="my-3 flex items-center gap-3 hover:scale-125 md:hover:scale-100"
					>
						<profile.icon
							className="text-2xl"
							style={{ color: profile.iconColor }}
						/>
						<span className="text-black text-sm hover:text-cyan-800 hidden md:inline">
							{profile.title}
						</span>
					</a>
				))}
			</div>
		</div>
	);
};

export default Profile;
