import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from './Menu';
import AppContext from '../context/AppContext';
import menu from "@icons/icon_menu.svg";
import MyOrder from '../containers/MyOrder'
import yard_logo from "@logos/logo_yard_sale.svg";
import cart from "@icons/icon_shopping_cart.svg";

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleOrder, setToggleOtder] = useState(false);
	const { state } = useContext(AppContext);
	const handleToggleMenu = () => {
		setToggleMenu(prevState => !prevState);
	};
	const handleToggleOrders = () => {
		setToggleOtder(prevState => !prevState);
	};

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={yard_logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li 
						className="navbar-email" 
						onClick={handleToggleMenu}
					>
							platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={handleToggleOrders}>
						<img src={cart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggleMenu ? <Menu /> : null}
			{toggleOrder ? <MyOrder /> : null}
		</nav>
	);
}

export default Header;
