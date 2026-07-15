import CTAButton from "@/components/CTAButton";
import Icon from "@/components/Icon";
import ResizingHeader from "@/components/ResizingHeader";

import Wave from "react-wavify";

/**
 * Hero section of the page. With a very nice and cool wave and header.
 */
const Hero = () => {
	return (
		// FIXED: Changed min-h-[100dvh] to min-h-screen to prevent mobile address bar scrolling gaps.
		// REMOVED: Duplicate "align-center" classes.
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
			{/* Top Icon */}
			<div className="bg-background-500 absolute -top-15 left-1/2 block aspect-square w-fit -translate-x-1/2 rounded-full p-15">
				<Icon size={64} className="text-text relative top-5 block" />
			</div>

			{/* Middle Layer Wave */}
			{/* FIXED: Changed flex-column (invalid) to flex-col */}
			<div className="absolute bottom-0 left-0 flex h-[55vh] w-full flex-col md:h-[50vh]">
				<Wave
					options={{ height: 15, amplitude: 35, speed: 0.2, points: 6 }}
					fill="currentColor"
					paused={false}
					className="text-secondary-500/50 z-10 block w-full"
				/>
			</div>

			{/* Text Header */}
			<div className="z-20 m-auto w-full px-5 md:px-20">
				<ResizingHeader className="m-auto">Enter your Haven</ResizingHeader>
			</div>

			{/* Foreground Wave & Button Container */}
			{/* FIXED: Changed grow-1 (invalid in standard Tailwind) to grow */}
			<div className="absolute bottom-0 left-0 flex h-[55vh] w-full flex-col md:h-[50vh]">
				<Wave
					fill="currentColor"
					paused={false}
					options={{ height: 40, amplitude: 40, speed: 0.3, points: 4 }}
					className="text-secondary-500 z-30 block w-full"
				/>
				<div className="bg-secondary-500 flex w-full grow items-center justify-center">
					<CTAButton href={""} className="z-40">
						Learn More
					</CTAButton>
				</div>
			</div>
		</div>
	);
};

export default Hero;
