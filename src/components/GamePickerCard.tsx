import { Box, Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { useSelectionContext } from '../context/SelectionContext';
import Game from '../entities/Game';
import getCroppedImageURL from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GamePickerCard = ({ game }: Props) => {
	const { selectedGames, toggleGameSelection } = useSelectionContext();

	const isSelected = selectedGames.some((item) => item.id === game.id);

	const handleClick = () => {
		toggleGameSelection(game);
	};

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

export default GamePickerCard;
