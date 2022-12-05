import { useState } from 'react';
import { Container, TitleTask } from './style';
import { useDrag } from 'react-dnd';
import itemTypes from '../../utils/itemTypes';

interface ITaskCardProps {
	id: string;
	title: string;
	status: string;
	description: string;
}

export function TaskCard({ title, status, id, description }: ITaskCardProps) {
	const [isCardOpen, setIsCardOpen] = useState(false);
	const [collected, drag] = useDrag(() => ({
		type: itemTypes.CARD,
		item: {
			ID: id,
		},
	}));

	return (
		<Container ref={drag}>
			<TitleTask>{title}</TitleTask>
			{/* <p>{description}</p> */}
		</Container>
	);
}
