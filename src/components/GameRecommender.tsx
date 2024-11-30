import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelection } from '../hooks/cardSelection'; // The useSelection hook
import { cosineSimilarity } from '../hooks/cosineSimilarity'; // The cosineSimilarity function
import APICleint, { FetchResponse } from '../services/api-client';

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
	platform: Platform[];
}

// The GameRecommender component
export const GameRecommender = () => {
	const { selectedItems, toggleSelection } = useSelection(); // Track user selections

	const [games, setGames] = useState<any[]>([]); // Stores game data from API
	const [genres, setGenres] = useState<any[]>([]); // Stores genre data from API
	const [platforms, setPlatforms] = useState<any[]>([]); // Stores platform data from API

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

	// Generate user vector based on selections
	const generateUserVector = () => {
		const genreVector = genres.map((genre) =>
			selectedItems.some(
				(item) => item.type === 'genre' && item.value === genre.name
			)
				? 1
				: 0
		);
		const platformVector = platforms.map((platform) =>
			selectedItems.some(
				(item) => item.type === 'platform' && item.value === platform.name
			)
				? 1
				: 0
		);
		const gameVector = games.map((game) =>
			selectedItems.some(
				(item) => item.type === 'game' && item.value === game.name
			)
				? 1
				: 0
		);

		return {
			genres: genreVector,
			platforms: platformVector,
			games: gameVector,
		};
	};

	const userVector = generateUserVector();

	// Calculate similarity scores for each game
	const gameSimilarities = games.map((game) => {
		const gameGenreVector = genres.map((genre) =>
			game.genres.some((g: { name: any }) => g.name === genre.name) ? 1 : 0
		);
		const gamePlatformVector = platforms.map((platform) =>
			game.platforms.some((p: { name: any }) => p.name === platform.name)
				? 1
				: 0
		);

		// Calculate similarity for genre and platform separately
		const genreSimilarity = cosineSimilarity(
			userVector.genres,
			gameGenreVector
		);
		const platformSimilarity = cosineSimilarity(
			userVector.platforms,
			gamePlatformVector
		);
		const similarity = genreSimilarity + platformSimilarity;

		return { gameName: game.name, similarity };
	});

	// Sort games by similarity
	const recommendedGames = gameSimilarities.sort(
		(a, b) => b.similarity - a.similarity
	);

	return (
		<div>
			<Heading>Recommended Games</Heading>
			<ul>
				{recommendedGames.map((game) => (
					<li key={game.gameName}>
						{game.gameName} - Similarity: {game.similarity}
					</li>
				))}
			</ul>
		</div>
	);
};
