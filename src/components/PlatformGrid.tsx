import { SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import usePlatforms from '../hooks/usePlatforms';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import PlatformCard from './PlatformCard';

const GameGrid = () => {
	const { data, error, isLoading } = usePlatforms();
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text> {error.message} </Text>;

	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing={6}
			padding="10px"
		>
			{isLoading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{data?.pages.map((page, index) => (
				<React.Fragment key={index}>
					{page.results.map((platform?) => (
						<GameCardContainer key={platform.id}>
							<PlatformCard platform={platform} />
						</GameCardContainer>
					))}
				</React.Fragment>
			))}
		</SimpleGrid>
	);
};

export default GameGrid;
