import { Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GenreGrid from '../components/GenreGrid';

const GenrePicker = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main footer"`,
				lg: `"main main" "footer footer"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
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
				display="flex"
				justifyContent="flex-end"
				alignItems="center"
				paddingX={10}
				paddingY={4}
				position="fixed"
				bottom={0}
				width="100%"
				height="100px"
				bgColor="rgb(30 19 53)"
			>
				<Link to="/gamepicker">
					<Button marginY={5} size="lg" borderRadius={15} border={5}>
						Pick Games
					</Button>
				</Link>
			</GridItem>
		</Grid>
	);
};

export default GenrePicker;
