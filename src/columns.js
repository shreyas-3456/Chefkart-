export const columns = [
	{
		title: 'first_name',
		dataIndex: 'first_name',
		key: 'first_name',

		sorter: (a, b) => a.first_name.localeCompare(b.first_name),
	},
	{
		title: 'last_name',
		dataIndex: 'last_name',
		key: 'last_name',
		sorter: (a, b) => a.last_name.localeCompare(b.last_name),
	},
	{
		title: 'email',
		dataIndex: 'email',
		key: 'email',
		sorter: (a, b) => a.email.localeCompare(b.email),
	},
	{
		title: 'gender',
		dataIndex: 'gender',
		key: 'gender',
	},
	{
		title: 'ip_address',
		dataIndex: 'ip_address',
		key: 'ip_address',
	},
	{
		title: 'airport code',
		dataIndex: 'airport_code',
		key: 'airportCode',
	},
	{
		title: 'time',
		dataIndex: 'time',
		key: 'time',
	},
	{
		title: 'status',
		dataIndex: 'status',
		key: 'status',
		render: (text, record) => {
			return (
				<p style={{ color: `${text ? 'green' : 'red'}` }}>{String(text)}</p>
			);
		},
	},
	{
		title: 'mobile',
		dataIndex: 'mobile',
		key: 'mobile',
	},
	{
		title: 'area',
		dataIndex: 'area',
		key: 'area',
	},
	{
		title: 'show',
		dataIndex: 'show',
		key: 'show',
		responsive: ['lg'],
		render: (text, record) => {
			return (
				<p style={{ color: `${text ? 'green' : 'red'}` }}>{String(text)}</p>
			);
		},
	},
	{
		title: 'edit',
		dataIndex: 'edit',
		key: 'edit',
		responsive: ['md', 'lg'],
		render: (text, record) => {
			return (
				<p style={{ color: `${text ? 'green' : 'red'}` }}>{String(text)}</p>
			);
		},
	},
];
