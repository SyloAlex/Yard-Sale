import React from 'react';
import '../styles/ProductItem.scss';
import bike from '@icons/bike.jpg';
import cart_icon from "@icons/bt_add_to_cart.svg"

const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src={bike} alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img src={cart_icon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
