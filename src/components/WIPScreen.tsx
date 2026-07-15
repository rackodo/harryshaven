/**
 * Temporary element - this website isn't done yet!
 */
const WIPScreen = ({ precedingBG }: { precedingBG: string }) => {
	return (
		<div
			className={`flex min-h-screen items-center justify-center bg-linear-to-b from-10% ${precedingBG} to-secondary-50 to-90%`}
		>
			<p className="text-3xl">Work-in-progress!</p>
		</div>
	);
};

export default WIPScreen;
