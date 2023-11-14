import { Skills } from "../types";
import {
	TbBrandTypescript,
	TbBrandTailwind,
	TbBrandBootstrap,
	TbBrandMongodb,
	TbBrandNextjs,
	TbBrandHtml5,
	TbBrandCss3,
	TbBrandMysql,
	TbBrandJavascript,
	TbBrandReact,
	TbBrandReactNative,
	TbBrandNodejs,
	TbBrandPrisma,
	TbBrandFigma,
	TbBrandUbuntu,
	TbBrandGithub,
} from "react-icons/tb";

const SkillsComponent = () => {
	const skills: Skills[] = [
		{ title: "html", bg: "#DC4A25", icon: TbBrandHtml5 },
		{ title: "css", bg: "#244BDD", icon: TbBrandCss3 },
		{ title: "javascript", bg: "#EFD81A", icon: TbBrandJavascript, text: true },
		{
			title: "typescript",
			bg: "#3077C6",
			icon: TbBrandTypescript,
		},
		{ title: "tailwindcss", bg: "#38BDF8", icon: TbBrandTailwind },
		{ title: "bootstrap", bg: "#7A10F7", icon: TbBrandBootstrap },
		{ title: "react", bg: "#0A7EA3", icon: TbBrandReact },
		{ title: "react native", bg: "#0A7EA3", icon: TbBrandReactNative },
		{ title: "nextjs", bg: "#000000", icon: TbBrandNextjs },
		{ title: "nodejs", bg: "#509F43", icon: TbBrandNodejs },
		{ title: "mysql", bg: "#3E6E93", icon: TbBrandMysql },
		{ title: "mongodb", bg: "#00EC64", icon: TbBrandMongodb, text: true },
		{ title: "prisma", bg: "#2D3748", icon: TbBrandPrisma },
		{ title: "figma", bg: "#2B2F41", icon: TbBrandFigma },
		{ title: "linux", bg: "#DE4F21", icon: TbBrandUbuntu },
		{ title: "github", bg: "#1F2229", icon: TbBrandGithub },
	];

	return (
		<div className="w-full mt-10">
			<h4 className="text-2xl font-bold my-5">Skills</h4>

			<div className="flex flex-wrap gap-3">
				{skills.map((skill) => (
					<div
						key={skill.title}
						className="flex gap-2 justify-center items-center p-2 rounded-full text-sm uppercase font-semibold cursor-pointer hover:scale-110 transition-all shadow-lg"
						style={{
							background: skill.bg,
							color: skill.text ? "black" : "white",
						}}
					>
						<skill.icon className="text-xl" />
						{skill.title}
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsComponent;
