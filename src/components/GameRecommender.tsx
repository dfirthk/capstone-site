import { Box, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelectionContext } from '../context/SelectionContext';
import Genre from '../entities/Genre';
import Platform from '../entities/Platform';
import { cosineSimilarity } from '../hooks/cosineSimilarity';
import APICleint from '../services/api-client';
import GameCardContainer from './GameCardContainer';

interface ParentPlatform {
	id: number;
	name: string;
}

export const GameRecommender = () => {
	const { selectedPlatforms, selectedGenres } = useSelectionContext();
	const [recommendedItems, setRecommendedItems] = useState<
		{ item: ParentPlatform | Genre; score: number }[]
	>([]);

	const platformClient = new APICleint<ParentPlatform>(
		'platforms/lists/parents'
	);
	const genreClient = new APICleint<Genre>('genres');

	useEffect(() => {
		const fetchFilteredItems = async () => {
			try {
				const platforms = await platformClient.getAllPaginated();
				const genres = await genreClient.getAllPaginated();
				console.log('Fetched parent platforms:', platforms);
				console.log('Fetched genres:', genres);

				const platformRecommendations = cosineSimilarity(
					selectedPlatforms,
					platforms
				).map((rec) => ({ item: rec.item, score: rec.score }));
				const genreRecommendations = cosineSimilarity(
					selectedGenres,
					genres
				).map((rec) => ({ item: rec.item, score: rec.score }));

				const recommendations = [
					...platformRecommendations,
					...genreRecommendations,
				].filter((rec) => rec.score > 0); // Filter out items with a score of 0%

				setRecommendedItems(recommendations.slice(0, 10)); // Get top 10 recommendations
				console.log('Final recommendations:', recommendations);
			} catch (err) {
				console.error('Error Fetching Data', err);
			}
		};

		if (selectedPlatforms.length > 0 || selectedGenres.length > 0) {
			fetchFilteredItems();
		}
	}, [selectedPlatforms, selectedGenres]);

	return (
		<Box>
			<Heading>Recommended Platforms and Genres</Heading>
			{recommendedItems.length === 0 && (
				<Text>No recommendations available.</Text>
			)}
			{recommendedItems.map(({ item, score }) => (
				<GameCardContainer key={item.id}>
					<Box borderWidth="1px" borderRadius="lg" p={4}>
						<Heading fontSize="xl">{item.name}</Heading>
						<Text>Score: {(score * 100).toFixed(2)}%</Text>
					</Box>
				</GameCardContainer>
			))}
		</Box>
	);
};

export default GameRecommender;
