import HavenIcon from "@/components/havenlogo.svg";

import Link from "next/link";

/**
 * Top navigation bar.
 * @todo Add logic so the text colour changes depending on the BodyWithDynamicBackground's current background colour.
 */
const Topbar = () => {
	return (
		<div className="fixed flex w-full justify-center p-5">
			<div className="m-0 flex w-full max-w-5xl items-center justify-center px-10 md:justify-between">
				<Toplink href="">Features</Toplink>
				<Toplink href="">Services</Toplink>
				<HavenIcon width={75} height={75} />
				<Toplink href="">Gallery</Toplink>
				<Toplink href="">Reviews</Toplink>
			</div>
		</div>
	);
};

/**
 * Topbar link. Speaks for itself, really.
 */
const Toplink = ({
	href,
	children
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return (
		<Link className={`hidden text-xl font-bold md:block`} href={href}>
			{children}
		</Link>
	);
};

export default Topbar;
