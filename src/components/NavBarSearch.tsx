import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import colorLogo from '../assets/colorLogo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBarSearch = () => {
	return (
		<HStack>
			<Link to="/">
				<Image src={colorLogo} boxSize="60px" objectFit="cover" />
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBarSearch;
