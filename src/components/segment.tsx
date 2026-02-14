/**
 * A container for content, with a flag for inverting the colours to make it dark mode.
 */
const Segment = ({
	inverted,
	children
}: {
	inverted?: boolean;
	children?: React.ReactNode;
}) => {
	return (
		<div
			data-inverted={inverted ? "yes" : "no"}
			className={`flex min-h-screen items-center justify-center ${inverted ? "bg-background-950 text-text-50" : "bg-background-50 text-text-950"}`}
		>
			{children}
		</div>
	);
};

export default Segment;
