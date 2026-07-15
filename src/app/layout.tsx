import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
	title: "Harry's Haven",
	description: "Harry's Haven in Harrington!",
	openGraph: {
		title: "Harry's Haven",
		description: "Harry's Haven in Harrington!",
		url: "https://harryshaven.vercel.app/"
	}
};

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="h-full antialiased">
			<body className="flex min-h-full flex-col">{children}</body>
		</html>
	);
}
