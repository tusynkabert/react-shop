import Catalog from "../components/Catalog";

export default function Search() {
	return (
		<div className="catalog" id="catalog">
			<div className="container">
				<div className="catalog__header">
					<div className="catalog__form">
						<input type="text" className="catalog__form-search" id="input-search" placeholder="Що хочете знайти?" value={""} />
						<button className="catalog__form-btn" id="btn-search">
							<svg class="icon icon-search">
								<use href="#icon-search"></use>
							</svg>
						</button>
					</div>
					<h3 className="catalog__products-summ">
						Знайдено товарів: <span id="view-count-products">0</span>
					</h3>
				</div>

				<Catalog />
			</div>
		</div>
	);
}
