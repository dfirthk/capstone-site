import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import Genre from '../entities/Genre';
import { usePlatformSelection } from '../hooks/platformSelection';
import getCroppedImageURL from '../services/image-url';

interface Props {
	genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
	return (
		<Box
			as="button"
			p={0}
			borderWidth="10px"
			borderRadius="lg"
			_hover={{ borderColor: 'green.400' }}
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
