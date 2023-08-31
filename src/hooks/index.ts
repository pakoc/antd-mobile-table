import { useEffect, useState } from 'react';

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
			const clientWidth = window.document.documentElement.clientWidth;

			if (clientWidth <= mobileBreakPoint != state) {
				state = clientWidth <= mobileBreakPoint;
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
