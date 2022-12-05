import { ContainerTasks } from '../../components/ContainerTasks';
import { Logo } from '../../components/Logo';
import { Container } from './styles';

export function Dashboard() {
	return (
		<Container>
			<Logo />
			<ContainerTasks />
		</Container>
	);
}
