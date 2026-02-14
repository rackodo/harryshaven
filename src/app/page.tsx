import ButtonLink from "@/components/button_link";
import Segment from "@/components/segment";

export default function Home() {
	return (
		<div>
			<Segment>
				<div className="flex w-full max-w-3xl flex-col items-center justify-center gap-10">
					<h1 className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-5 text-center text-3xl md:text-5xl">
						Looking For Your Next Family Vacation?
					</h1>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-15">
						<ButtonLink href="">Book Now</ButtonLink>
					</div>
				</div>
			</Segment>
			<Segment inverted></Segment>
		</div>
	);
}
