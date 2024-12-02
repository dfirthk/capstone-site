import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Visuals from '../components/Visuals';
import { useSelectionContext } from '../context/SelectionContext';
import Game from '../entities/Game';
import { cosineSimilarity } from '../hooks/cosineSimilarity';
import APICleint from '../services/api-client';

const RecommendedGames = () => {
	const { selectedGames } = useSelectionContext();
	const [recommendedGames, setRecommendedGames] = useState<
		{ game: Game; score: number }[]
	>([]);
	const [allGames, setAllGames] = useState<Game[]>([]);

	const gameClient = new APICleint<Game>('games');

	useEffect(() => {
		const fetchAllGames = async () => {
			try {
				const games = await gameClient.getAllPaginated({}, 5); // Limit to 5 pages
				setAllGames(games);
				console.log('Fetched games:', games);
				const recommendations = cosineSimilarity(selectedGames, games)
					.map((rec) => ({ game: rec.item, score: rec.score }))
					.filter((rec) => rec.score > 0); // Filter out items with a score of 0%
				setRecommendedGames(recommendations.slice(0, 5)); // Get top 5 recommendations
				console.log('Final recommendations:', recommendations);
			} catch (err) {
				console.error('Error Fetching Data', err);
			}
		};

		fetchAllGames();
	}, [selectedGames]);

	const graphData = allGames.map((game) => {
		const recommendation = recommendedGames.find(
			(rec) => rec.game.id === game.id
		);
		const score = recommendation ? recommendation.score : 0;
		return {
			name: game.name,
			score: parseFloat((score * 100).toFixed(2)),
		};
	});

	return (
		<Box>
			<Heading>Recommended Games</Heading>
			{recommendedGames.length === 0 && (
				<Text>No recommendations available.</Text>
			)}
			<VStack spacing={4} align="stretch">
				{recommendedGames.map(({ game, score }) => (
					<Box key={game.id} borderWidth="1px" borderRadius="lg" p={4}>
						<Heading fontSize="xl">{game.name}</Heading>
						<Text>Score: {(score * 100).toFixed(2)}%</Text>
					</Box>
				))}
			</VStack>
			<Visuals data={graphData} />
			<HStack
				position="fixed"
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
				<Link to="/">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Finish
					</Button>
				</Link>
			</HStack>
		</Box>
	);
};

export default RecommendedGames;
