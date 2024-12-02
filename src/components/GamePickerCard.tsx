import { Box, Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import Game from '../entities/Game';
import { useSelection } from '../hooks/platformSelection';
import getCroppedImageURL from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const { selectedItems, toggleSelection } = useSelection();

	const isSelected = selectedItems.some(
		(item) => item.type === 'game' && item.value === game.name
	);

	const handleClick = () => {
		toggleSelection('game', game.name);
		setTimeout(() => {
			console.log('Selected Items:', selectedItems);
		}, 0);
	};

	useEffect(() => {
		console.log('Selected Items:', selectedItems);
	}, [selectedItems]);

	return (
		<Box
			as="button"
			p={0}
			borderWidth="10px"
			borderColor={isSelected ? 'green.500' : 'gray.200'}
			borderRadius="lg"
			_hover={{ borderColor: 'green.400' }}
			onClick={handleClick}
			transition="border-color 0.2s"
		>
			<Card>
				<Image src={getCroppedImageURL(game.background_image)} />
				<CardBody>
					<HStack justifyContent="space-between" marginBottom={3}>
						<PlatformIconList
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize="2xl">{game.name}</Heading>
				</CardBody>
			</Card>
		</Box>
	);
};

export default GameCard;
