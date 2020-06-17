import React from 'react';
import { ModalContainer } from './Styles';
import { ProductConsumer } from '../contaxt';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default function Modal() {
	return (
		<div>
			<ProductConsumer>
				{(value) => {
					const { modalOpen, closeModal } = value;
					const { img, title, price } = value.modalProduct;
					if (!modalOpen) {
						return null;
					} else {
						return (
							<ModalContainer>
								<div className='container'>
									<div className='row'>
										<div
											id='modal'
											className='col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5'>
											<h5>item added to the cart</h5>
											<img src={img} className='img-fluid' alt='product' />
											<h5>{title}</h5>
											<h5 className='text-muted'> price : ${price}</h5>
											<Link to='/'>
												<ButtonContainer onClick={closeModal}>
													Store
												</ButtonContainer>
											</Link>
											<Link to='/cart'>
												<ButtonContainer cart onClick={closeModal}>
													View Cart
												</ButtonContainer>
											</Link>
										</div>
									</div>
								</div>
							</ModalContainer>
						);
					}
				}}
			</ProductConsumer>
		</div>
	);
}
