import styled, { css } from 'styled-components';

interface ITaskCardStyledProps {
	isTaskOpen: boolean;
}

export const Container = styled.div<ITaskCardStyledProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	padding: 0.3rem 0;
	border-radius: 1.25rem;
	transition: all 0.2s ease-in;

	${({ isTaskOpen }) => css`
		& {
			background-color: ${isTaskOpen ? '#F2F2F2' : '#FFF'};
			padding: ${isTaskOpen ? '1.25rem 0.875rem 0.875rem 0.75rem' : '0'};
		}
	`}
`;

export const TitleTask = styled.p`
	font-family: 'Recoleta', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.36rem;
`;

export const HeadingTask = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const BodyTask = styled.div<ITaskCardStyledProps>`
	display: flex;
	flex-direction: column;
	font-family: 'Recoleta', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	padding-left: 1.6rem;
	
	&::before {
		content: '';
		width: 25%;
		height: 0.1rem;
		display: block;
		background-color: black;
		margin: 0.5rem 0;
	}

	> p {
		margin: 1rem 0;
		opacity: 0.3;
	}

	${({ isTaskOpen }) => css`
		& {
			display: ${isTaskOpen ? 'block' : 'none'};
		}
	`}
`;
