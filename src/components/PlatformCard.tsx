import { Card, CardBody, Heading } from '@chakra-ui/react';
import Platform from '../entities/Platform';

interface Props {
	platform: Platform;
}

const PlatformCard = ({ platform }: Props) => {
	return (
		<Card>
			<CardBody>
				<Heading fontSize="2xl">{platform.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default PlatformCard;
