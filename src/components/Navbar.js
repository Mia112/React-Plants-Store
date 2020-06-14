import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer, NavWrapper } from './Styles';

const Navbar = () => {
	return (
		<NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
			<Link className='navbar-brand' to='/'>
				Plant Store
			</Link>
			<ul className='navbar-nav align-items-center'>
				<li className='nav-item ml-5'>
					<Link to='/' className='nav-link'>
						Products
					</Link>
				</li>
			</ul>
			<Link to='/cart' className='ml-auto'>
				<ButtonContainer>
					<span className='mr-2'>
						<i className='fas fa-cart-plus' />
					</span>
					my cart
				</ButtonContainer>
			</Link>
		</NavWrapper>
	);
};
export default Navbar;
