import { useEffect, useState } from "react";

/**
 * current state hook
 * @param mobileBreakPoint
 * @returns
 */
export const useIsMobile = (mobileBreakPoint?: number) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (!mobileBreakPoint) {
			return;
		}

		let state = false;

		const handleResize = () => {
			if (window.innerWidth <= mobileBreakPoint != state) {
				state = window.innerWidth <= mobileBreakPoint;
				setIsMobile(state);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		() => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return isMobile;
};