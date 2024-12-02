import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Platform from '../entities/Platform';
import { cosineSimilarity } from '../hooks/cosineSimilarity';
import { usePlatformSelection } from '../hooks/platformSelection';
import APICleint, { FetchResponse } from '../services/api-client';

const TestPage = () => {
	const { selectedPlatforms, togglePlatformSelection } = usePlatformSelection();
	const [allPlatforms, setAllPlatforms] = useState<Platform[]>([]);
	const [recommendedPlatforms, setRecommendedPlatforms] = useState<
		{ platform: Platform; score: number }[]
	>([]);

	const platformClient = new APICleint<Platform>('platforms');

	useEffect(() => {
		// Fetch platforms from RAWG API
		platformClient
			.getAll({})
			.then((data: FetchResponse<Platform>) => setAllPlatforms(data.results))
			.catch((err) => console.error('Error Fetching Platforms', err));
	}, []);

	useEffect(() => {
		if (selectedPlatforms.length > 0) {
			const recommendations = cosineSimilarity(selectedPlatforms, allPlatforms);
			setRecommendedPlatforms(recommendations);
		}
	}, [selectedPlatforms, allPlatforms]);

	return (
		<Box>
			<Heading>Test Page</Heading>
			<Box>
				<Heading size="md">Select Platforms</Heading>
				{allPlatforms.map((platform) => (
					<Button
						key={platform.id}
						onClick={() => togglePlatformSelection(platform)}
					>
						{platform.name}
					</Button>
				))}
			</Box>
			<Box>
				<Heading size="md">Recommended Platforms</Heading>
				{recommendedPlatforms.length === 0 && (
					<Text>No recommendations available.</Text>
				)}
				{recommendedPlatforms.map(({ platform, score }) => (
					<Box
						key={platform.id}
						borderWidth="1px"
						borderRadius="lg"
						p={4}
						mb={4}
					>
						<Text fontSize="xl">{platform.name}</Text>
						<Text>Similarity Score: {score.toFixed(2)}</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default TestPage;
