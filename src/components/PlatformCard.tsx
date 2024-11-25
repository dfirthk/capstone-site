import { Card, CardBody, Heading, HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import Platform from '../entities/Platform';

interface Props {
	platform: Platform;
}

const GameCard = ({ platform }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};
	return (
		<Card>
			<Icon
				marginX={150}
				marginY={10}
				boxSize={10}
				key={platform.id}
				as={iconMap[platform.slug]}
			/>
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}></HStack>
				<Heading fontSize="4xl">{platform.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
