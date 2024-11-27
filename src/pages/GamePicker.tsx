import { Box, Button, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import GameGrid from '../components/InfiniteGameGrid';
import NavBarSearch from '../components/NavBarSearch';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const GamePicker = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav main"`,
				lg: `"nav nav" "aside main" "footer footer"`,
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
			<GridItem
				area="footer"
				display="flex"
				justifyContent="flex-end"
				alignItems="center"
				paddingX={10}
				paddingY={4}
				position="fixed"
				bottom={0}
				width="100%"
				height="100px"
				bgColor="rgb(30 19 53)"
			>
				<Link to="/gamepicker">
					<Button marginY={5} size="lg" borderRadius={15} border={5}>
						Run Results
					</Button>
				</Link>
			</GridItem>
		</Grid>
	);
};

export default GamePicker;
