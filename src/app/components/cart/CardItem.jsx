export default function CardItem() {
	return (
		<div className="cart-added-list__item">
			<button className="cart-added-list__item-btn-delete btn-light">
				<svg className="icon icon-close">
					<use href="#icon-close"></use>
				</svg>
			</button>
			<img src="img/catalog/1.jpg" alt="" className="cart-added-list__item-img" />
			<p className="cart-added-list__item-text-hold">
				<a href="#" className="cart-added-list__item-title-link">
					Назва товару
				</a>
				<span className="cart-added-list__item-meta-list">
					<span className="cart-added-list__item-meta">Ціна: 6 999 грн</span>
				</span>
			</p>
			<input type="text" className="cart-added-list__item-count" placeholder="0" value="" />
			<button className="cart-added-list__item-btn-plus btn-light"></button>
			<button className="cart-added-list__item-btn-minus btn-light"></button>
		</div>
	);
}
