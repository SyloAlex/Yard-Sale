import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';
import arrow from "@icons/flechita.svg"

const MyOrder = ({ toggle }) => {
	const { state } = useContext(AppContext);
	const totalOrder = () => {
		const reducer = (accum, currentValue) => accum + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img onClick={toggle} src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(item => (
					<OrderItem product={item}key={`orderItem-${item.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${totalOrder()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
