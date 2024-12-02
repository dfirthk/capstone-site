import { Box, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { cosineSimilarity } from '../hooks/cosineSimilarity'; // The cosineSimilarity function
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
	return <div>Test</div>;
};
