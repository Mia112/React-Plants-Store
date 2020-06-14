import React from 'react';
import Product from './Product';
import Title from './Title';

import { ProductConsumer } from '../contaxt';

const ProductList = () => {
	return (
		<React.Fragment>
			<div className='py-5'>
				<div className='container'>
					<Title name='Our' title='Products' />
					<div className='row'>
						<ProductConsumer>
							{(value) => {
								return value.products.map((product) => {
									return <Product key={product.id} product={product} />;
								});
							}}
						</ProductConsumer>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProductList;