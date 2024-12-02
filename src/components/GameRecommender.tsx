import { Box, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { cosineSimilarity } from '../hooks/cosineSimilarity'; // The cosineSimilarity function
import { useSelection } from '../hooks/platformSelection'; // The useSelection hook
import APICleint, { FetchResponse } from '../services/api-client';
import GameCardContainer from './GameCardContainer';

interface Genre {
	id: number;
	name: string;
}

interface Platform {
	id: number;
	name: string;
}

interface Game {
	id: number;
	name: string;
	genres: Genre[];
	platforms: Platform[];
}

// The GameRecommender component
export const GameRecommender = () => {
	const { selectedItems, toggleSelection } = useSelection(); // Track user selections

	const [games, setGames] = useState<Game[]>([]); // Stores game data from API
	const [genres, setGenres] = useState<Genre[]>([]); // Stores genre data from API
	const [platforms, setPlatforms] = useState<Platform[]>([]); // Stores platform data from API
	const [recommendedGames, setRecommendedGames] = useState<
		{ game: Game; score: number }[]
	>([]);

	const genreClient = new APICleint<Genre>('genres');
	const platformClient = new APICleint<Platform>('platforms');
	const gameClient = new APICleint<Game>('games');

	// Fetch games, genres, and platforms from RAWG API
	useEffect(() => {
		genreClient
			.getAll({})
			.then((data: FetchResponse<Genre>) => setGenres(data.results))
			.catch((err) => console.error('Error Fetching Genres', err));

		platformClient
			.getAll({})
			.then((data: FetchResponse<Platform>) => setPlatforms(data.results))
			.catch((err) => console.error('Error Fetching Platforms', err));

		gameClient
			.getAll({})
			.then((data: FetchResponse<Game>) => setGames(data.results))
			.catch((err) => console.error('Error Fetching Games', err));
	}, []);

	useEffect(() => {
		console.log('Selected Items:', selectedItems);
		console.log('Games:', games);

		if (selectedItems.length > 0 && games.length > 0) {
			const scores = games.map((game) => {
				const gameIds = game.genres
					.map((genre) => genre.id)
					.concat(game.platforms.map((platform) => platform.id));
				const selectedIds = selectedItems.map((item) => item.id);
				const score = cosineSimilarity(selectedIds, gameIds);
				console.log(
					`Game: ${game.name}, Selected IDs: ${selectedIds}, Game IDs: ${gameIds}, Similarity Score: ${score}`
				);
				return { game, score };
			});

			// Sort games by similarity score in descending order
			scores.sort((a, b) => b.score - a.score);

			// Log the sorted scores
			console.log('Sorted Scores:', scores);

			// Update the recommended games state
			setRecommendedGames(scores);
		}
	}, [selectedItems, games]);

	useEffect(() => {
		console.log('Recommended Games:', recommendedGames);
	}, [recommendedGames]);

	return (
		<div>
			<Heading>Recommended Games</Heading>
			{recommendedGames.length === 0 && (
				<Text>No recommendations available.</Text>
			)}
			{recommendedGames.map(({ game, score }) => (
				<GameCardContainer key={game.id}>
					<Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
						<Text fontSize="xl">{game.name}</Text>
						<Text>Similarity Score: {score.toFixed(2)}</Text>
					</Box>
				</GameCardContainer>
			))}
		</div>
	);
};
