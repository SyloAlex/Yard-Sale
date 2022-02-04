import React from "react";
import '../styles/MobileMenu.scss'

const MobileMenu = () => {
    return (
        <div className="mobile-menu">
            <div className="categories">
                <ul>
                    <li>
                        <a href="/">CATEGORIES</a>
                    </li>
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
            <div>
                <ul>
                    <li>
                        <a href="/">My Orders</a>
                    </li>
                    <li>
                        <a href="/">My Account</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="/" className="email">test@yardsale.com</a>
                    </li>
                    <li>
                        <a href="/" className="signout">Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;