import styled from 'styled-components';

export const Container = styled.figure`
	display: flex;
	flex-direction: column;
	align-items: center;

	> img {
		margin-bottom: 1.5rem;
	}
`;

export const Title = styled.h1`
	font-weight: 500;
	font-size: 2.25rem;
	line-height: 3.06rem;
`;

export const DescriptionLogo = styled.p`
	font-family: 'Untitled Sans', sans-serif;
	font-weight: 400;
	font-size: 1.25rem;
	line-height: 1.56rem;
`;
