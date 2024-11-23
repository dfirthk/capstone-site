import { Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
				lg: '200px',
			}}
		>
			<GridItem area="main">
				<Box padding={10}>
					<Heading fontSize="4xl">
						Select the platforms you'd like to play on
					</Heading>
				</Box>
				<PlatformGrid />
			</GridItem>
			<GridItem
				area="footer"
				display="flex"
				justifyContent="flex-end"
				alignItems="center"
				paddingX={10}
				paddingY={4}
			>
				<Link to="/library">
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
