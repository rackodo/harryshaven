import Link from "next/link";
import HavenIcon from '@/components/havenlogo.svg'

const Topbar = () => {
	return (
		<div className="flex justify-center w-full p-5 fixed">
			<div className="max-w-5xl w-full items-center flex justify-center md:justify-between m-0 px-10">
				<Toplink href="">Features</Toplink>
				<Toplink href="">Services</Toplink>
				<HavenIcon width={75} height={75} />
				<Toplink href="">Gallery</Toplink>
				<Toplink href="">Reviews</Toplink>
			</div>
		</div>
	);
};

const Toplink = ({
	href,
	children
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return <Link className={`font-bold text-xl hidden md:block`} href={href}>{children}</Link>;
};

export default Topbar;
