import styled, { css } from 'styled-components';

interface WrapperProps {
	readonly $isMobile: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
	& {
		display: flex;
		flex-direction: column;

		${props => {
			if (props.$isMobile)
				return css`
					.ant-table {
						&-thead,
						&-tbody:not(:has(.ant-empty)) {
							display: none;
						}
					}
				`;
		}}

		.antd-mobile-table {
			&-cards {
				display: ${props => (props.$isMobile ? 'flex' : 'none')};
				flex-direction: column;
				gap: 8px;
			}

			&-row {
				display: flex;
			}

			&-title {
				width: '50%';
			}
			&-value {
				padding: 0 8px;
			}
		}
	}
`;
