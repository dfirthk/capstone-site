import { Box, Button, Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { GameRecommender } from '../components/GameRecommender';
import PlatformGrid from '../components/PlatformGrid';

const PlatformPicker = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main footer"`,
				lg: `"main main" "footer footer"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem area="main">
				<GameRecommender />
			</GridItem>
		</Grid>
	);
};

export default PlatformPicker;
