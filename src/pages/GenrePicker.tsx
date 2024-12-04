import { Box, Button, Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import GenreGrid from '../components/GenreGrid';

const GenrePicker: React.FC = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main" "footer"`,
				lg: `"main main" "footer footer"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
			height="100vh"
		>
			<GridItem area="main">
				<Box padding={10}>
					<Heading fontSize="4xl">
						Select the genres you'd like to play on
					</Heading>
				</Box>
				<GenreGrid />
			</GridItem>
			<GridItem
				area="footer"
				position="fixed"
				bottom={0}
				left={0}
				right={0}
				height="100px"
				bgColor="rgb(30 19 53)"
				zIndex={10}
			>
				<HStack justifyContent="space-between" height="100%" align="center">
					<Link to="/platforms">
						<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
							Back: Select Platforms
						</Button>
					</Link>
					<Link to="/gamepicker">
						<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
							Next: Select Games
						</Button>
					</Link>
				</HStack>
			</GridItem>
		</Grid>
	);
};

export default GenrePicker;
