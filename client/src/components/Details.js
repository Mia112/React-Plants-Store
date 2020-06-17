import React from 'react';
import { ProductConsumer } from '../contaxt';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
// import Product from './Product';

const Details = () => {
	return (
		<ProductConsumer>
			{(value) => {
				const {
					id,
					company,
					img,
					info,
					price,
					title,
					inCart
				} = value.detailProduct;
				return (
					<div className='container py-5'>
						{/*title*/}
						<div className='row'>
							<div className='col-10 mx-auto text-center text-slanted text-black my-5'>
								<h3>{title}</h3>
							</div>
						</div>
						{/* end title */}
						{/* product info */}
						<div className='row'>
							<div className='col-10 mx-auto col-md-6 my-3'>
								<img src={img} alt='product' className='img-fluid' />
							</div>
							{/* product text */}
							<div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
								<h5>{title}</h5>
								<h6 className='text-title text-uppercase text-muted mt-3 mb-2'>
									From: <span className='text-uppercase'>{company}</span>
								</h6>
								<p className='price'>
									<strong>
										price : <span>$</span>
										{price}
									</strong>
								</p>
								<h6 className='text-title lead text-capitalize mt-3 mb-0'>
									Plant Info
								</h6>
								<p className='description-text'>{info}</p>
								{/* buttons */}
								<div>
									<Link to='/'>
										<ButtonContainer>Back</ButtonContainer>
									</Link>
									<ButtonContainer
										cart
										disabled={inCart ? true : false}
										onClick={() => {
											value.addToCart(id);
											value.openModal(id);
										}}>
										{inCart ? 'Added to Cart' : 'Add to Cart '}
									</ButtonContainer>
								</div>
							</div>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
};

export default Details;
