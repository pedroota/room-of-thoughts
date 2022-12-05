import styled from 'styled-components';

export const Container = styled.div`
	min-width: 18.75rem;
	min-height: 340px;
	display: flex;
	flex-direction: column;
	padding: 2rem 1.75rem 0 1.75rem;
	background: #fafafa;
	border: 0.06rem solid #ffffff;
	box-shadow: 0px 439px 268px rgba(0, 0, 0, 0.06),
		0px 202.963px 123.905px rgba(0, 0, 0, 0.0445005),
		0px 116.131px 70.8953px rgba(0, 0, 0, 0.0376069),
		0px 70.4906px 43.033px rgba(0, 0, 0, 0.0323969),
		0px 42.4737px 25.9293px rgba(0, 0, 0, 0.0276031),
		0px 23.6521px 14.4391px rgba(0, 0, 0, 0.0223931),
		0px 10.1726px 6.21015px rgba(0, 0, 0, 0.0154995);
	border-radius: 2.5rem;
`;

export const HeadColumnTasks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.1rem;
	
	> div {
		display: inherit;
		gap: 0.5rem;
	}

	figure {
		display: inherit;
		gap: 0.75rem;
		margin-left: 0.3rem;
	}

	h2 {
		font-weight: 500;
		font-size: 2.25rem;
		line-height: 3.06rem;
		font-family: 'Recoleta', sans-serif;
	}
`;
