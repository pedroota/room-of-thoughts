import { Container, HeadColumnTasks, ScrollTasks } from './styles';
import CircleIcon from '../../assets/ellipse.svg';
import { useDrop } from 'react-dnd';
import itemTypes from '../../utils/itemTypes';

interface IColumnTasksProps {
	icon?: string;
	title: 'To-do' | 'In progress' | 'Done';
	children: JSX.Element[] | JSX.Element;
	changeStatusTask: (
		id: string,
		column: 'To-do' | 'In progress' | 'Done'
	) => void;
}

interface IItemDrop {
	ID: string;
}

export function ColumnTasks({
	icon,
	title,
	children,
	changeStatusTask,
}: IColumnTasksProps) {
	const [{ isOver }, drop] = useDrop(() => ({
		accept: itemTypes.CARD,
		drop: (item: IItemDrop, _monitor) => changeStatusTask(item.ID, title),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

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

			<ScrollTasks ref={drop}>{children}</ScrollTasks>
		</Container>
	);
}
