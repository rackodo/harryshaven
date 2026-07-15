import Icon from "@/components/Icon";

const Hero = () => {
	return (
		<div className="align-center align-center flex min-h-dvh items-center justify-center">
			{/* Logo up the top */}
			<div className="bg-background-500 absolute -top-15 left-[50%] block aspect-square w-fit -translate-x-[50%] rounded-full p-15">
				<Icon size={64} className="text-text top relative top-5 block" />
			</div>
			<h1>Enter your Haven</h1>
		</div>
	);
};

export default Hero;
