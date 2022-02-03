import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';
import close_icon from "@icons/icon_close.png"

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={close_icon} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
