import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 4rem;
	margin: 2rem 0;
	padding: 0 1rem;

	@media screen and (min-width: 768px) {
		& {
			flex-wrap: nowrap;
		}
	}
`;
