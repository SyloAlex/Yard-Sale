import React from 'react';
import '../styles/OrderItem.scss';
import bike from '@icons/bike.jpg';
import close_icon from "@icons/icon_close.png"

const OrderItem = ({ product }) => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close_icon} alt="close" />
		</div>
	);
}

export default OrderItem;
