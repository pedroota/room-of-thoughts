import { useState } from 'react';
import { ColumnTasks } from '../ColumnTasks';
import { Container } from './styles';
import SpiralIcon from '../../assets/spiral.svg';
import { TaskCard } from '../TaskCard';
import { ITask } from '../../interfaces/task.interface';

export function ContainerTasks() {
	const [taskList, setTaskList] = useState<ITask[]>([
		{
			id: (Math.random() * 100).toFixed(0),
			status: 'to-do',
			title: 'Get the trash out',
			description: "Don't forget to get the trash out pls",
		},
	]);

	const changeStatusTask = (
		id: string,
		column: 'To-do' | 'In progress' | 'Done'
	) => {
		const draggedTask = taskList.filter((task) => task.id === id)[0];
		switch (column) {
			case 'To-do':
				draggedTask.status = 'to-do';
				break;
			case 'In progress':
				draggedTask.status = 'in-progress';
				break;
			case 'Done':
				draggedTask.status = 'done';
				break;
		}
		setTaskList(taskList.filter((task) => task.id !== id).concat(draggedTask));
	};

	return (
		<Container>
			<ColumnTasks title="To-do" changeStatusTask={changeStatusTask}>
				{taskList
					.filter((task) => task.status === 'to-do')
					.map(({ title, status, id, description }, index) => (
						<TaskCard
							key={index}
							title={title}
							status={status}
							id={id}
							description={description}
						/>
					))}
			</ColumnTasks>
			<ColumnTasks title="In progress" changeStatusTask={changeStatusTask}>
				{taskList
					.filter((task) => task.status === 'in-progress')
					.map(({ title, status, id, description }, index) => (
						<TaskCard
							key={index}
							title={title}
							status={status}
							id={id}
							description={description}
						/>
					))}
			</ColumnTasks>
			<ColumnTasks
				title="Done"
				icon={SpiralIcon}
				changeStatusTask={changeStatusTask}
			>
				{taskList
					.filter((task) => task.status === 'done')
					.map(({ title, status, id, description }, index) => (
						<TaskCard
							key={index}
							title={title}
							status={status}
							id={id}
							description={description}
						/>
					))}
			</ColumnTasks>
		</Container>
	);
}
