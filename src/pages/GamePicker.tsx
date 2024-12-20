import {
	Box,
	Button,
	Flex,
	Grid,
	GridItem,
	Heading,
	HStack,
	Show,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import NavBarSearch from '../components/NavBarSearch';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const GamePicker: React.FC = () => {
	return (
		<Grid
			templateAreas={{
				base: `"nav main"`,
				lg: `"aside main" "footer footer"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<Show above="lg">
				<GridItem area="aside" paddingX={5} marginY={10}>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main">
				<Box paddingLeft={3}>
					<Heading as="h1" marginY={5} fontSize="5xl">
						Pick a Few Popular Games You've Played Before
					</Heading>
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
				position="fixed"
				bottom={0}
				left={0}
				right={0}
				height="100px"
				bgColor="rgb(30 19 53)"
				zIndex={10}
			>
				<HStack justifyContent="space-between" height="100%" align="center">
					<Link to="/genres">
						<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
							Back: Select Genres
						</Button>
					</Link>
					<Link to="/recommended-platforms">
						<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
							Next: See Recommended Platforms
						</Button>
					</Link>
				</HStack>
			</GridItem>
		</Grid>
	);
};

export default GamePicker;
