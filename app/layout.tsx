import React from "react";
import "./globals.css";

export const metadata = {
	title: "WowGram",
	description: "Instagram Clone",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
