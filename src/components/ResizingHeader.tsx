"use client";

import { AutoTextSize } from "auto-text-size";

const ResizingHeader = ({
	children,
	className
}: {
	children: React.ReactNode;
	className: string;
}) => {
	return (
		<AutoTextSize
			mode="multiline"
			className={className}
			maxFontSizePx={999}
			as="h1"
		>
			{children}
		</AutoTextSize>
	);
};

export default ResizingHeader;
