import { UrlObject } from "url";

import Link from "next/link";

/**
 * Call-to-action button! A glorified link.
 */
const CTAButton = ({
	children,
	href,
	className
}: {
	children: React.ReactNode;
	href: string | UrlObject;
	className?: string;
}) => {
	return (
		<Link
			href={href}
			className={`bg-accent-500 rounded-3xl px-8 py-3 text-xl font-bold ${className ? className : ""}`}
		>
			{children}
		</Link>
	);
};

export default CTAButton;
