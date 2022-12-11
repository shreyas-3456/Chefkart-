import { Divider, Table } from 'antd';
import { columns } from './columns';
import { mockData } from './utils/MOCK_DATA';
import { useState } from 'react';

function App() {
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	const onSelectChange = (selectedRowKeys) => {
		setSelectedRowKeys(selectedRowKeys);
	};
	return (
		<>
			<Divider />
			<Table
				rowSelection={{
					type: 'checkbox',
					selectedRowKeys,
					onChange: onSelectChange,
				}}
				columns={columns}
				dataSource={mockData}
				showHeader={true}
				pagination={false}
			/>
		</>
	);
}

export default App;
