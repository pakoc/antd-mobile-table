import { Card, Table, TableProps } from 'antd';

import { Wrapper } from './AntdMobileTable.styled';
import { useIsMobile } from './hooks';

const cssPrefix = 'antd-mobile-table';

interface ResponsiveTableProps<RecordType extends object = any>
	extends TableProps<RecordType> {
	mobileBreakPoint?: number;
}

export const AntdMobileTable = (props: ResponsiveTableProps) => {
	const { mobileBreakPoint, ...tableProps } = props;

	const { rowKey = 'key' } = tableProps;

	const isMobile = useIsMobile(mobileBreakPoint);

	return (
		<Wrapper
			className={`${cssPrefix} ${props.className ?? ''} ${
				isMobile ? cssPrefix + '-mobile' : cssPrefix + '-desktop'
			}`}
			$isMobile={isMobile}
		>
			<div className={`${cssPrefix}-cards`}>
				{tableProps.dataSource?.map(row => (
					<Card className={`${cssPrefix}-card`} key={row[rowKey as string]}>
						{tableProps.columns?.map((col, index) => {
							return (
								<div
									className={`${cssPrefix}-row`}
									key={`${col.key} ${row[rowKey as string]}`}
								>
									<div className={`${cssPrefix}-title`}>
										{col.title as string}
									</div>
									<div className={`${cssPrefix}-value`}>
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

			<Table {...tableProps} />
		</Wrapper>
	);
};
