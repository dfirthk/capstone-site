import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import Genre from '../entities/Genre';
import { useSelection } from '../hooks/cardSelection';
import getCroppedImageURL from '../services/image-url';

interface Props {
	genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
	const { selectedItems, toggleSelection } = useSelection();

	const isSelected = selectedItems.some(
		(item) => item.type === 'genre' && item.value === genre.name
	);

	return (
		<Box
			as="button"
			p={0}
			borderWidth="10px"
			borderColor={isSelected ? 'green.500' : 'gray.200'}
			borderRadius="lg"
			_hover={{ borderColor: 'green.400' }}
			onClick={() => toggleSelection('genre', genre.name)}
			transition="border-color 0.2s"
		>
			<Card>
				<Image src={getCroppedImageURL(genre.image_background)} />
				<CardBody>
					<Heading fontSize="2xl">{genre.name}</Heading>
				</CardBody>
			</Card>
		</Box>
	);
};

export default GenreCard;
