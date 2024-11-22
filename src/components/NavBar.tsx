import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import colorLogo from '../assets/colorLogo.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
	return (
		<>
			<Box marginX={10} marginY={5}>
				<Link to="/">
					<Image
						src={colorLogo}
						boxSize="100px"
						objectFit="cover"
						borderRadius={30}
					/>
				</Link>
			</Box>
			<Box marginX={12}>
				<ColorModeSwitch />
			</Box>
		</>
	);
};

export default NavBar;
