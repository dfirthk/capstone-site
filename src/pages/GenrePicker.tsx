import { Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GenreGrid from '../components/GenreGrid';
import PlatformGrid from '../components/PlatformGrid';

const PlatformPicker = () => {
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
			>
				<Link to="/gamepicker">
					<Button
						marginY={5}
						size="lg"
						borderRadius={15}
						color="#8c52ff"
						variant="ghost"
					>
						Next
					</Button>
				</Link>
			</GridItem>
		</Grid>
	);
};

export default PlatformPicker;
