import { Box, Flex, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import GameHeading from '../components/GameHeading';
import GameGrid from '../components/InfiniteGameGrid';
import Landing from '../components/Landing';
import NavBar from '../components/NavBar';
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
