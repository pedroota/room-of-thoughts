import { useState } from 'react';
import { BodyTask, Container, HeadingTask, TitleTask } from './style';
import { useDrag } from 'react-dnd';
import itemTypes from '../../utils/itemTypes';
import { TodoIcon, InProgressIcon, DoneIcon } from '../../assets/icons';
import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';
import { DiscardTaskIcon, SaveTaskIcon } from "../../assets/icons"

interface ITaskCardProps {
	id: string;
	title: string;
	status: 'to-do' | 'in-progress' | 'done';
	description: string;
}

export function TaskCard({ title, status, id, description }: ITaskCardProps) {
	const [isTaskOpen, setisTaskOpen] = useState(false);
	const [collected, drag] = useDrag(() => ({
		type: itemTypes.CARD,
		item: {
			ID: id,
		},
	}));

	return (
		<Container ref={drag} onClick={() => setisTaskOpen(prevState => !prevState)} isTaskOpen={isTaskOpen}>
			<HeadingTask>
				{status === 'to-do' ? <img src={TodoIcon} alt="To-do Icon" /> : null}
				{status === 'in-progress' ? (
					<img src={InProgressIcon} alt="In Progress Icon" />
				) : null}
				{status === 'done' ? <img src={DoneIcon} alt="Done Icon" /> : null}
				<TitleTask>{title}</TitleTask>
			</HeadingTask>
			<BodyTask isTaskOpen={isTaskOpen}>
				<p>{description}</p>
				<ButtonGroup>
					<Button variant='warning'>
						<img src={DiscardTaskIcon} alt="Discard a Task" />
						Discard
					</Button>
					<Button variant='primary'>
						<img src={SaveTaskIcon} alt="Save a task" />
						Save Task
					</Button>
				</ButtonGroup>
			</BodyTask>
		</Container>
	);
}
