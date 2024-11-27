import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import Platform from '../entities/Platform';
import getCroppedImageURL from '../services/image-url';

interface Props {
	platform: Platform;
}

const PlatformCard = ({ platform }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageURL(platform.image_background)} />
			<CardBody>
				<Heading fontSize="2xl">{platform.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default PlatformCard;
