import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import GameGrid from '../components/InfiniteGameGrid';
import NavBarSearch from '../components/NavBarSearch';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const GameLibrary = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem area="nav" paddingX={5}>
				<NavBarSearch />
			</GridItem>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={9}>
					<GameHeading />
					<Flex>
						<Box marginRight={5}>
							<PlatformSelector />
						</Box>
						<SortSelector />
					</Flex>
				</Box>
				<GameGrid />
			</GridItem>
		</Grid>
	);
};

export default GameLibrary;
