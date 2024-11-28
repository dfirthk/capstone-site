import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { isObject } from 'util';
import Platform from '../entities/Platform';
import { useSelection } from '../hooks/cardSelection';
import getCroppedImageURL from '../services/image-url';

interface Props {
	platform: Platform;
}

const PlatformCard = ({ platform }: Props) => {
	const { selectedItems, toggleSelection } = useSelection();

	const isSelected = selectedItems.some(
		(item) => item.type === 'platform' && item.value === platform.name
	);

	return (
		<Box
			as="button"
			p={0}
			borderWidth="10px"
			borderColor={isSelected ? 'green.500' : 'gray.200'}
			borderRadius="lg"
			_hover={{ borderColor: 'green.400' }}
			onClick={() => toggleSelection('platform', platform.name)}
			transition="border-color 0.2s"
		>
			<Card>
				<Image src={getCroppedImageURL(platform.image_background)} />
				<CardBody>
					<Heading fontSize="2xl">{platform.name}</Heading>
				</CardBody>
			</Card>
		</Box>
	);
};

export default PlatformCard;
