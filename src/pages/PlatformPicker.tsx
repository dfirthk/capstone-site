import { Box, Button, Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PlatformGrid from '../components/PlatformGrid';
import { useSelectionContext } from '../context/SelectionContext';

const PlatformPicker = () => {
	const { selectedPlatforms } = useSelectionContext();

	return (
		<Grid
			templateAreas={`"header header"
                            "main main"
                            "footer footer"`}
			gridTemplateRows={'auto 1fr auto'}
			gridTemplateColumns={'1fr'}
			height="100vh"
		>
			<GridItem area="main">
				<Box paddingLeft={3}>
					<Heading as="h1" marginY={5} fontSize="5xl">
						Select Your Platforms
					</Heading>
					<PlatformGrid />
				</Box>
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
				<HStack justifyContent="right">
					<Link to="/genres">
						<Button size="lg" colorScheme="teal" marginX={10} marginY={5}>
							Next: Select Genres
						</Button>
					</Link>
				</HStack>
			</GridItem>
		</Grid>
	);
};

export default PlatformPicker;
