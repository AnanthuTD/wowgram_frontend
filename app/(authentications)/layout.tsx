import React from "react";
import Logo from "../components/svg/logo";

export default function authenticationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="bg-white flex min-h-screen flex-row justify-center">
			<div className="h-screen flex flex-col justify-center items-center">
				<div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
					<div className="h-full flex items-center justify-center">
						<Logo fill="black" />
					</div>
					{children}
				</div>
			</div>
		</section>
	);
}