import styled from 'styled-components';

const Search = styled.input`
	outline: none;

	display: block;
	padding: .75rem 1rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #191a1a;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #cacccc;
	border-radius: 0;

	&:focus {
		border-color: #191a1a;
	}

	transition: border 300ms ease-in-out;
`;

export { Search };
