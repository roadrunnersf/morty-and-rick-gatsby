import styled from 'styled-components'

const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	width: 100%;
	margin: 9px;
	border-radius: 5px;

	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
	transition: all 200ms ease-in-out;
`
export default Card
