import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

interface GraphComponentProps {
	data: { name: string; score: number }[];
}

const Visuals: React.FC<GraphComponentProps> = ({ data }) => {
	return (
		<Box>
			<ResponsiveContainer width="100%" height={400}>
				<BarChart
					data={data}
					margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="score" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</Box>
	);
};

export default Visuals;
