import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import colorLogo from '../assets/colorLogo.png';

const Finished = () => {
	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			height="100vh" // Full height of the viewport
			textAlign="center" // Centers the text horizontally
			padding={4} // Optional padding for spacing
		>
			<Image
				src={colorLogo}
				boxSize="250px"
				objectFit="cover"
				borderRadius={25}
			/>
			<Heading fontSize="8xl" fontWeight="extrabold">
				Thank you for finishing the Game Wizard!
			</Heading>
			<Text fontSize="3xl" fontWeight="bold" mb={6}>
				Still not seeing what you are looking for? Feel free to browse our
				library of games!
			</Text>
			<Text fontSize="3xl" fontWeight="bold" mb={6}>
				You can also go back and change your preferences.
			</Text>
			<HStack>
				<Link to="/platforms">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Change Your Preferences
					</Button>
				</Link>
				<Link to="/library">
					<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
						Browse Our Library
					</Button>
				</Link>
			</HStack>
		</Flex>
	);
};

export default Finished;
