"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * \<body> element with additional special logic to change the background colour depending on if the currently visible Segment element is inverted or not.
 *
 * In hindsight, this is mostly useless, because segments style their own backgrounds depending on their inverted flag. But I was annoyed by the background behind the Safari browser's scrollbar not matching the current background colour, so I decided to throw some extra logic in.
 */
const BodyWithDynamicBackground = ({ children }: { children: ReactNode }) => {
	const containerRef = useRef<HTMLBodyElement>(null);
	const [bgColor, setBgColor] = useState("no");

	useEffect(() => {
		if (!containerRef.current) return;

		// select all children with data-bg
		const sections =
			containerRef.current.querySelectorAll<HTMLDivElement>(
				"[data-inverted]"
			);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setBgColor(
							entry.target.getAttribute("data-inverted") || "no"
						);
					}
				});
			},
			{ threshold: 0.5 } // adjust how much must be visible
		);

		sections.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [bgColor]);

	return (
		<body
			ref={containerRef}
			className="transition-colors duration-500"
			style={
				bgColor == "yes"
					? { backgroundColor: "#1a1700" }
					: { backgroundColor: "#fffce5" }
			}
		>
			{children}
		</body>
	);
};

export default BodyWithDynamicBackground;
