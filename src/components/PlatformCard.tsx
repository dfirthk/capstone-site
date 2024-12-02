import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react';
import Platform from '../entities/Platform';
import { usePlatformSelection } from '../hooks/platformSelection';
import getCroppedImageURL from '../services/image-url';

interface Props {
	platform: Platform;
}

const PlatformCard = ({ platform }: Props) => {
	const { selectedPlatforms, togglePlatformSelection } = usePlatformSelection();

	const isSelected = selectedPlatforms.some((item) => item.id === platform.id);

	const handleClick = () => {
		togglePlatformSelection(platform);
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
					src={getCroppedImageURL(platform.image_background || '')}
					alt={platform.name || 'Platform'}
				/>
				<CardBody>
					<Heading fontSize="2xl">
						{platform.name || 'Unknown Platform'}
					</Heading>
				</CardBody>
			</Card>
		</Box>
	);
};

export default PlatformCard;
