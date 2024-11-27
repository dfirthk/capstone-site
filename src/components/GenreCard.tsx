import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import Genre from '../entities/Genre';
import Platform from '../entities/Platform';
import getCroppedImageURL from '../services/image-url';

interface Props {
	genre: Genre;
}

const GenreCard = ({ genre }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageURL(genre.image_background)} />
			<CardBody>
				<Heading fontSize="2xl">{genre.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GenreCard;
