import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
}

const Icon = ({ size, className, ...props }: IconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 50 50`}
			fill="none"
			stroke="none"
			className={className}
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.11026 16.4944H22.2648L22.2009 46.6329L18.625 47.528V50H31.3112V47.528L27.7352 46.6329V35.8071H40.8897V46.6329L37.3138 47.528V50H50V47.528L46.424 46.6329V22.6798L50 21.7848V19.3127H37.3138V21.7848L40.8897 22.6798V32.6958H27.7352L27.7991 3.36708L31.375 2.47203V0H18.6888V2.47203L22.2648 3.36708V13.3831H9.11026V3.36708L12.6862 2.47203V0H0V2.47203L3.57599 3.36708V27.3202L0 28.2152V30.6873H12.6862V28.2152L9.11026 27.3202V16.4944Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default Icon;
