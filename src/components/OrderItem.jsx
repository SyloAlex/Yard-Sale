import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext'
import close_icon from "@icons/icon_close.png"

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);
	const handleRemove = (item) => {
		removeFromCart(item);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img onClick={() => handleRemove(product)} src={close_icon} alt="close" />
		</div>
	);
}

export default OrderItem;
