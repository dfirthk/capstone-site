import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { useSelectionContext } from '../context/SelectionContext';
import Genre from '../entities/Genre';
import getCroppedImageURL from '../services/image-url';

interface Props {
	genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
	const { selectedGenres, toggleGenreSelection } = useSelectionContext();

	const isSelected = selectedGenres.some((item) => item.id === genre.id);

	const handleClick = () => {
		toggleGenreSelection(genre);
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
				<Image
					src={getCroppedImageURL(genre.image_background || '')}
					alt={genre.name || 'Genre'}
				/>
				<CardBody>
					<Heading fontSize="2xl">{genre.name || 'Unknown Genre'}</Heading>
				</CardBody>
			</Card>
		</Box>
	);
};

export default GenreCard;
