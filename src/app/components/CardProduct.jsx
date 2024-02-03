import React from "react";

export default function CardProduct() {
	return (
		<div className="card-product">
			<div className="card-product__img-hold">
				<img src="img/catalog/1.jpg" alt="" className="card-product__img" />
			</div>
			<div className="card-product__text-hold">
				<a href="#" className="card-product__title-link">
					Планшет Lenovo Tab M10 Plus 4/128 Grey
				</a>
				<span className="card-product__price">
					8 999 грн <small>12 999 грн</small>
				</span>
				<a href="#" className="card-product__btn-add">
					<svg className="icon icon-cart">
						<use href="#icon-cart-add"></use>
					</svg>
				</a>
			</div>
		</div>
	);
}
