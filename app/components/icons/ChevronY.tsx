import React from "react";
import { SvgProps } from "../../../utils/Interfaces";
interface ChevronY_Props extends SvgProps {
	type?: "up" | "down";
}

export default function ChevronY({ className, type = "up" }: ChevronY_Props) {
	return (
		<span className={["inline-block" , type === "down" ? "rotate-180" : ""].join(" ")}>
			<svg
				aria-label="Down Chevron Icon"
				className="relative block"
				color="rgb(245, 245, 245)"
				fill="rgb(245, 245, 245)"
				height="16"
				role="img"
				viewBox="0 0 24 24"
				width="16">
				<title>Down Chevron Icon</title>
				<path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
			</svg>
		</span>
	);
}
