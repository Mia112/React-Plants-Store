import styled from 'styled-components';

export const NavWrapper = styled.nav`
	background: var(--whiteWhite);
	.nav-link {
		color: var(--blackBlack) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}

	.navbar-brand {
		color: var(--blackBlack) !important;
	}
`;

export const ProductWrapper = styled.div`
	.card {
		align-items: stretch;
		border-color: transparent;
		transition: all 1s linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 1s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: var(--blackBlack);
		border: none;
		color: var(--offWhite);
		font-size: 1.4rem;
		border-radius: 0.5rem 0 0 0;
		transform: translate(100%, 100%);
		transition: all 1s linear;
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
	.cart-btn:hover {
		opacity: 0.7;

		color: var(--offWhite);
	}
`;
