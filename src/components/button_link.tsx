import Link from "next/link";

/**
 * A link styled to look like a button. Includes an inverted flag that can be used to darkmode it.
 */
const ButtonLink = ({
	href,
	inverted,
	children
}: {
	href: string;
	inverted?: boolean;
	children: React.ReactNode;
}) => {
	return (
		<Link
			className={`px-6 py-2 text-2xl font-bold uppercase ${inverted ? "bg-background-50 text-text-950" : "bg-background-950 text-text-50"}`}
			href={href}
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
