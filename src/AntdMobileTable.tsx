import { Card, Pagination, Table, TableProps } from 'antd';

import { useIsMobile } from './hooks';

interface ResponsiveTableProps<RecordType extends object = any>
	extends TableProps<RecordType> {
	mobileBreakPoint?: number;
}

const cssPrefix = 'antd-mobile-table';

export const AntdMobileTable = (props: ResponsiveTableProps) => {
	const { mobileBreakPoint, ...tableProps } = props;

	const { rowKey = 'key' } = tableProps;

	const isMobile = useIsMobile(mobileBreakPoint);

	if (!isMobile) {
		return <Table {...tableProps} />;
	}

	return (
		<div
			className={`${cssPrefix} ${props.className ?? ''}`}
			style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
		>
			{tableProps.dataSource?.map(row => (
				<Card className={`${cssPrefix}-card`} key={row[rowKey as string]}>
					{tableProps.columns?.map((col, index) => {
						return (
							<div
								className={`${cssPrefix}-row`}
								key={`${col.key} ${row[rowKey as string]}`}
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

			{props.pagination ? <Pagination {...props.pagination} /> : null}
		</div>
	);
};
