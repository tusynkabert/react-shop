import { useState } from "react";
import CardItem from "./CardItem";
import CartNoResult from "./CartNoResult";

export default function CartAddedList() {
	//стан корзини
	const [cartToggle, setCartToggle] = useState(false);

	return (
		<div className="cart-added-list">
			<button className="cart-added-list__btn" id="js-cart-added-btn" onClick={() => setCartToggle(!cartToggle)}>
				<span className="cart-added-summ js-cart-added-summ">0</span>
				<svg className="icon icon-cart-bag">
					<use href="#icon-cart-bag"></use>
				</svg>
			</button>
			<div className={`cart-added-list__item-list ${cartToggle ? "show" : ""}`}>
				{/* <CardItem /> */}
				<CartNoResult />
			</div>
		</div>
	);
}
