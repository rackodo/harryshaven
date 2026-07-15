import Hero from "@/components/Hero";
import WIPScreen from "@/components/WIPScreen";

export default function Home() {
	return (
		<div>
			<Hero />
			<WIPScreen precedingBG="from-secondary-500" />
		</div>
	);
}
