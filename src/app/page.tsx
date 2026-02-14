import BLink from "@/components/b-link";
import Topbar from "@/components/topbar";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Topbar />
			<div className="flex justify-center items-center h-dvh">
				<div className="flex max-w-3xl w-full items-center justify-center flex-col gap-10">
					<h1 className="text-3xl md:text-5xl text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-5">Looking For Your Next Family Vacation?</h1>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-15">
						<BLink href="">Book Now</BLink>
					</div>
				</div>
			</div>
		</div>
	);
}
