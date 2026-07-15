"use client";

import { useEffect, useRef } from "react";

/**
 * Resizable h1 element that fills the width of its container
 */
const ResizingHeader = ({
	children,
	className = ""
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	// get refs for the parent container and the h1
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		// set the consts to their refs
		const container = containerRef.current;
		const text = textRef.current;

		// if these consts don't exist, don't do anything
		if (!container || !text) return;

		// resizing function: calculates a font size based off of the text width and the container width, then applies it
		const resizeText = () => {
			text.style.fontSize = "";

			const containerWidth = container.clientWidth;
			const textWidth = text.offsetWidth;

			if (textWidth === 0) return;

			const currentFontSize = parseFloat(
				window.getComputedStyle(text).fontSize
			);
			text.style.fontSize = `${(containerWidth / textWidth) * currentFontSize}px`;
		};

		// run the function for the first time - fit the width
		resizeText();

		// wait for the google fonts to download, then calculate again. otherwise the sizing is off
		if ("fonts" in document) {
			document.fonts.ready.then(() => {
				resizeText();
			});
		}

		// track if the window is resized, then run the resizing function
		const observer = new ResizeObserver(resizeText);
		observer.observe(container);

		return () => observer.disconnect();
	}, [children]);

	return (
		<div
			ref={containerRef}
			className={`w-full max-w-full overflow-hidden ${className}`}
		>
			<h1 ref={textRef} className="white-space-nowrap inline-block text-nowrap">
				{children}
			</h1>
		</div>
	);
};

export default ResizingHeader;
