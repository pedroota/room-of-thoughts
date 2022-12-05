import LogoImage from '../../../../assets/logo.svg';
import { Container, DescriptionLogo, Title } from './styles';

export function Logo() {
	return (
		<Container>
			<img src={LogoImage} alt="Logo Room Of Thoughts" />
			<Title>Room Of Thoughts</Title>
			<DescriptionLogo>Don't think, throw in the room</DescriptionLogo>
		</Container>
	);
}
