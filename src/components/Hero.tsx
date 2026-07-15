import Icon from "@/components/Icon";

import CTAButton from "./CTAButton";
import ResizingHeader from "./ResizingHeader";
import Wave from "react-wavify";

// TODO: Magically resize the heading text to fill most of the screen width.

const Hero = () => {
	return (
		<div className="align-center align-center flex min-h-dvh items-center justify-center">
			{/* Logo up the top */}
			<div className="bg-background-500 absolute -top-15 left-[50%] block aspect-square w-fit -translate-x-[50%] rounded-full p-15">
				<Icon size={64} className="text-text top relative top-5 block" />
			</div>
			<div className="flex-column absolute bottom-0 left-0 flex h-[55dvh] w-full md:h-[50dvh]">
				<Wave
					options={{ height: 15, amplitude: 35, speed: 0.2, points: 6 }}
					fill="currentColor"
					paused={false}
					className="text-secondary-500/50 z-10 block w-full"
				/>
			</div>
			<div className="z-20 m-auto w-dvw px-5 md:px-20">
				<ResizingHeader className="m-auto">Enter your Haven</ResizingHeader>
			</div>
			<div className="absolute bottom-0 left-0 flex h-[55dvh] w-full flex-col md:h-[50dvh]">
				<Wave
					fill="currentColor"
					paused={false}
					options={{ height: 40, amplitude: 40, speed: 0.3, points: 4 }}
					className="text-secondary-500 z-30 block w-full"
				/>
				<div className="bg-secondary-500 block flex w-full grow-1 items-center justify-center">
					<CTAButton href={""} className="z-40">
						Learn More
					</CTAButton>
				</div>
			</div>
		</div>
	);
};

export default Hero;
