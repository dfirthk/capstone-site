import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Visuals from '../components/Visuals';
import { useSelectionContext } from '../context/SelectionContext';
import genres from '../data/genres';
import Game from '../entities/Game';

const getRecommendedGames = (selectedGenres: Set<string>, allGames: Game[]) => {
	const filteredGames = allGames.filter((game) =>
		game.genres?.some((genre) => selectedGenres.has(genre.name))
	);

	const uniqueGames = Array.from(new Set(filteredGames.map((game) => game.id)))
		.map((id) => filteredGames.find((game) => game.id === id))
		.filter((game): game is Game => game !== undefined);

	return uniqueGames.slice(0, 10); // Get top 10 recommendations
};

const extractAllGames = (data: any) => {
	const allGames: Game[] = [];
	data.results.forEach((genre: any) => {
		genre.games.forEach((game: any) => {
			if (!game.genres) {
				game.genres = [];
			}
			game.genres.push({ name: genre.name });
			allGames.push(game);
		});
	});
	return allGames;
};

const getGenreData = (games: Game[]) => {
	const genreCount: { [key: string]: number } = {};
	games.forEach((game) => {
		if (game.genres) {
			game.genres.forEach((genre) => {
				if (genreCount[genre.name]) {
					genreCount[genre.name]++;
				} else {
					genreCount[genre.name] = 1;
				}
			});
		}
	});
	return genreCount;
};

const RecommendedGames: React.FC = () => {
	const { selectedGenres } = useSelectionContext();
	const selectedGenresSet = useMemo(
		() => new Set(selectedGenres.map((genre) => genre.name)),
		[selectedGenres]
	);
	const [recommendedGames, setRecommendedGames] = useState<Game[]>([]);

	const allGames = useMemo(() => extractAllGames(genres), []);

	useEffect(() => {
		const recommendations = getRecommendedGames(selectedGenresSet, allGames);
		setRecommendedGames(recommendations);
	}, [selectedGenresSet, allGames]);

	const genreData = useMemo(
		() => getGenreData(recommendedGames),
		[recommendedGames]
	);

	const chartData = Object.keys(genreData).map((name) => ({
		name,
		score: genreData[name],
	}));

	return (
		<Box height="150vh" overflowY="auto" p={4}>
			<Heading as="h1" size="lg" mb={4}>
				Recommended Games
			</Heading>
			{recommendedGames.length === 0 && (
				<Text>No recommendations available.</Text>
			)}
			<VStack spacing={4} align="stretch" marginY={10}>
				{recommendedGames.map((game, index) => (
					<Box
						key={`${game.id}-${index}`}
						borderWidth="1px"
						borderRadius="lg"
						p={4}
					>
						<Link to={'/games/' + game.slug}>
							<Heading fontSize="xl">{game.name}</Heading>
						</Link>
					</Box>
				))}
			</VStack>
			<Heading as="h2" size="md" mb={4}>
				Games by Genre
			</Heading>
			<Visuals data={chartData} />
			<HStack
				position="fixed"
				left={0}
				right={0}
				bottom={0}
				width="100%"
				bgColor="rgb(30 19 53)"
				p={4}
				justifyContent="space-between"
			>
				<Link to="/recommended-genres">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Back: Recommended Genres
					</Button>
				</Link>
				<Link to="/finish">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Finish
					</Button>
				</Link>
			</HStack>
		</Box>
	);
};

export default RecommendedGames;
