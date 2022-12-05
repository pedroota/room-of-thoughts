import { ColumnTasks } from '../ColumnTasks';
import { Container } from './styles';
import SpiralIcon from '../../../../assets/spiral.svg';

export function ContainerTasks() {
	return (
		<Container>
			<ColumnTasks title="To-do" />
			<ColumnTasks title="In progress" />
			<ColumnTasks title="Done" icon={SpiralIcon} />
		</Container>
	);
}
