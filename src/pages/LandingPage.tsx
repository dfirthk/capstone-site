import { Box, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import Landing from '../components/Landing';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const LandingPage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"main main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px',
			}}
		>
			<GridItem area="main">
				<Landing />
			</GridItem>
		</Grid>
	);
};

export default LandingPage;
