import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Visuals from '../components/Visuals';
import { useSelectionContext } from '../context/SelectionContext';
import { cosineSimilarity } from '../hooks/cosineSimilarity';
import APICleint from '../services/api-client';

interface ParentPlatform {
	id: number;
	name: string;
}

const RecommendedPlatforms = () => {
	const { selectedPlatforms } = useSelectionContext();
	const [recommendedPlatforms, setRecommendedPlatforms] = useState<
		{ platform: ParentPlatform; score: number }[]
	>([]);
	const [allPlatforms, setAllPlatforms] = useState<ParentPlatform[]>([]);

	const platformClient = new APICleint<ParentPlatform>(
		'platforms/lists/parents'
	);

	useEffect(() => {
		const fetchFilteredPlatforms = async () => {
			try {
				const platforms = await platformClient.getAllPaginated();
				setAllPlatforms(platforms);
				console.log('Fetched parent platforms:', platforms);
				const recommendations = cosineSimilarity(selectedPlatforms, platforms)
					.map((rec) => ({ platform: rec.item, score: rec.score }))
					.filter((rec) => rec.score > 0); // Filter out items with a score of 0%
				setRecommendedPlatforms(recommendations.slice(0, 10)); // Get top 10 recommendations
				console.log('Final recommendations:', recommendations);
			} catch (err) {
				console.error('Error Fetching Data', err);
			}
		};

		if (selectedPlatforms.length > 0) {
			fetchFilteredPlatforms();
		}
	}, [selectedPlatforms]);

	const graphData = allPlatforms.map((platform) => {
		const recommendation = recommendedPlatforms.find(
			(rec) => rec.platform.id === platform.id
		);
		const score = recommendation ? recommendation.score : 0;
		return {
			name: platform.name,
			score: parseFloat((score * 100).toFixed(2)),
		};
	});

	return (
		<Box>
			<Heading>Recommended Platforms</Heading>
			{recommendedPlatforms.length === 0 && (
				<Text>No recommendations available.</Text>
			)}
			<VStack spacing={4} align="stretch" marginY={10}>
				{recommendedPlatforms.map(({ platform, score }) => (
					<Box key={platform.id} borderWidth="1px" borderRadius="lg" p={4}>
						<Heading fontSize="xl">{platform.name}</Heading>
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
				<Link to="/game-picker">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Back: Select Games
					</Button>
				</Link>
				<Link to="/recommended-genres">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Next: Recommended Genres
					</Button>
				</Link>
			</HStack>
		</Box>
	);
};

export default RecommendedPlatforms;