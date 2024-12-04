import { Grid, GridItem } from '@chakra-ui/react';
import Finished from '../components/Finished';
import Landing from '../components/Landing';

const FinishPage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"main main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px',
			}}
		>
			<GridItem area="main">
				<Finished />
			</GridItem>
		</Grid>
	);
};

export default FinishPage;
