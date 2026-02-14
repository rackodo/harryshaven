import Link from "next/link";

const BLink = ({ href, children } : { href: string; children: React.ReactNode }) => {
	return (
		<Link className="bg-text-950 text-background-50 dark:bg-text-50 dark:text-background-950 font-bold text-2xl py-2 px-6 uppercase" href={href}>
			{children}
		</Link>
	)
}

export default BLink