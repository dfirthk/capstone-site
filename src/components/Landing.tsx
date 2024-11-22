import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import colorLogo from '../assets/colorLogo.png';

const Landing = () => {
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
				Welcome to the Game Wizard!
			</Heading>
			<Text fontSize="3xl" fontWeight="bold" mb={6}>
				Ever feel like you can never find the perfect game for you? We are here
				to help!
			</Text>
			<Link to="/platforms">
				<Button
					marginY={5}
					size="lg"
					borderRadius={15}
					color="#8c52ff"
					variant="ghost"
				>
					Get Started
				</Button>
			</Link>
		</Flex>
	);
};

export default Landing;
