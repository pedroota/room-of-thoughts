import { Container, HeadColumnTasks } from './styles';
import CircleIcon from "../../../../assets/ellipse.svg"

interface IColumnTasksProps {
	icon?: string;
	title: string;
}

export function ColumnTasks({ icon, title }: IColumnTasksProps) {
	return (
		<Container>
			<HeadColumnTasks>
				<div>
					{icon && <img src={icon} alt="Icon task done" />}
					<h2>{title}</h2>
				</div>
				<figure>
					<img src={CircleIcon} alt="Circled Icon" />
					<img src={CircleIcon} alt="Circled Icon" />
					<img src={CircleIcon} alt="Circled Icon" />
				</figure>
			</HeadColumnTasks>
		</Container>
	);
}
