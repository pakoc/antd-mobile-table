import { useEffect, useState } from 'react';

import { Card, Table, TableProps } from 'antd';

interface ResponsiveTableProps<RecordType extends object = any>
	extends TableProps<RecordType> {
	mobileBreakPoint?: number;
}

/**
 * current state hook
 * @param mobileBreakPoint
 * @returns
 */
const useIsMobile = (mobileBreakPoint?: number) => {
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

const cssPrefix = 'antd-mobile-table';

export const AntdMobileTable = (props: ResponsiveTableProps) => {
	const { mobileBreakPoint, ...tableProps } = props;

	const isMobile = useIsMobile(mobileBreakPoint);

	if (!isMobile) {
		return <Table {...tableProps} />;
	}

	return (
		<div
			className="antd-mobile-table"
			style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
		>
			{tableProps.dataSource?.map(row => (
				<Card className={`${cssPrefix}-card`} key={row.key}>
					{tableProps.columns?.map((col, index) => {
						return (
							<div
								className={`${cssPrefix}-row`}
								key={`${col.key} ${row.key}`}
								style={{ display: 'flex' }}
							>
								<div className={`${cssPrefix}-title`} style={{ width: '50%' }}>
									{col.title as string}
								</div>
								<div
									className={`${cssPrefix}-value`}
									style={{ paddingLeft: 8 }}
								>
									{col.key
										? col.render
											? col.render(row[col.key], row, index)
											: row[col.key]
										: null}
								</div>
							</div>
						);
					})}
				</Card>
			))}
		</div>
	);
};
