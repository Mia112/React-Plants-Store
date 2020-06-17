import React from 'react';
import { ProductConsumer } from '../../contaxt';
import Title from '../Title';
import CartColumns from './CartColumns';

import EmptyCart from './EmptyCart';

export default function Cart() {
	return (
		<section>
			<ProductConsumer>
				{(value) => {
					const { cart } = value;
					if (cart.length > 0) {
						return (
							<>
								<Title name='Shopping' title='Cart' />
								<CartColumns />
							</>
						);
					} else {
						return <EmptyCart />;
					}
				}}
			</ProductConsumer>
		</section>
	);
}
