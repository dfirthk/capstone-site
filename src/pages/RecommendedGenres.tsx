import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Visuals from '../components/Visuals';
import { useSelectionContext } from '../context/SelectionContext';
import Genre from '../entities/Genre';
import { cosineSimilarity } from '../hooks/cosineSimilarity';
import APIClient from '../services/api-client';

const RecommendedGenres = () => {
	const { selectedGenres } = useSelectionContext();
	const [recommendedGenres, setRecommendedGenres] = useState<
		{ genre: Genre; score: number }[]
	>([]);
	const [allGenres, setAllGenres] = useState<Genre[]>([]);

	const genreClient = new APIClient<Genre>('genres');

	useEffect(() => {
		const fetchFilteredGenres = async () => {
			try {
				const genres = await genreClient.getAll({});
				setAllGenres(genres.results);
				const recommendations = cosineSimilarity(selectedGenres, genres.results)
					.map((rec) => ({ genre: rec.item, score: rec.score }))
					.filter((rec) => rec.score > 0); // Filter out items with a score of 0%
				setRecommendedGenres(recommendations.slice(0, 10)); // Get top 10 recommendations
			} catch (err) {
				console.error('Error Fetching Data', err);
			}
		};

		if (selectedGenres.length > 0) {
			fetchFilteredGenres();
		}
	}, [selectedGenres]);

	const graphData = allGenres.map((genre) => {
		const recommendation = recommendedGenres.find(
			(rec) => rec.genre.id === genre.id
		);
		const score = recommendation ? recommendation.score : 0;
		return {
			name: genre.name,
			score: parseFloat((score * 10000).toFixed(2)),
		};
	});

	return (
		<Box>
			<Heading>Recommended Genres</Heading>
			{recommendedGenres.length === 0 && (
				<Text>No recommendations available.</Text>
			)}
			<VStack spacing={4} align="stretch" marginY={10}>
				{recommendedGenres.map(({ genre, score }) => (
					<Box key={genre.id} borderWidth="1px" borderRadius="lg" p={4}>
						<Heading fontSize="xl">{genre.name}</Heading>
						<Text>Score: {(score * 100).toFixed(2)}%</Text>
					</Box>
				))}
			</VStack>
			<Visuals data={graphData} />
			<HStack
				position="fixed"
				bottom={0}
				left={0}
				right={0}
				height="100px"
				bgColor="rgb(30 19 53)"
				p={4}
				justifyContent="space-between"
			>
				<Link to="/game-picker">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Back: Select Games
					</Button>
				</Link>
				<Link to="/recommended-games">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Next: Recommended Games
					</Button>
				</Link>
			</HStack>
		</Box>
	);
};

export default RecommendedGenres;
