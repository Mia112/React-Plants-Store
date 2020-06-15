import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--lightGray);
	border-color: ${(props) =>
		props.cart ? 'var(--mainGreen)' : 'var(--blackBlack)'};
	color: ${(prop) => (prop.cart ? 'var(--mainGreen)' : 'var(--blackBlack)')};
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.5s ease-in-out;
	&:hover {
		background: ${(prop) =>
			prop.cart ? 'var(--lightGray)' : 'var(--lightGray)'};
	}
	&:focus {
		outline: none;
	}
`;
