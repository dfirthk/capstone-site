import { Grid, GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import NavBarSearch from '../components/NavBarSearch';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, isLoading, error } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<>
			<Grid>
				<NavBarSearch />
			</Grid>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
				<GridItem marginX={10}>
					<Heading>{game.name}</Heading>
					<ExpandableText>{game.description_raw}</ExpandableText>
					<GameAttributes game={game} />
				</GridItem>
				<GridItem>
					<GameTrailer gameId={game.id} />
					<GameScreenshots gameId={game.id} />
				</GridItem>
			</SimpleGrid>
		</>
	);
};

export default GameDetailPage;
