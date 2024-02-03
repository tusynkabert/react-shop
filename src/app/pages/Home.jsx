import CardProduct from "../components/CardProduct";
import Catalog from "../components/Catalog";

export default function Home() {
	return (
		<>
			<div className="catalog" id="catalog">
				<div className="container">
					<div className="catalog__header">
						<div className="catalog__select-category dropdown">
							<h3 className="dropdown-btn">Вибрати категорію</h3>
							<div class="dropdown-content" id="category-list">
								<a class="dropdown-item" href="">
									Скинути вибір
								</a>
								<a class="dropdown-item " href="">
									Apple
								</a>
								<a class="dropdown-item " href="">
									Macbook
								</a>
								<a class="dropdown-item " href="">
									Apple watch
								</a>
								<a class="dropdown-item " href="">
									iPad
								</a>
							</div>
						</div>
						<h3 className="catalog__products-summ">
							Знайдено товарів: <span id="view-count-products">24</span>
						</h3>
					</div>

					<Catalog />
				</div>
			</div>

			<div className="hot-offers" id="hot-offers">
				<div className="container">
					<h2 className="hot-offers__title title-square">
						<span className="title-square__icon">
							<svg className="icon icon-fire">
								<use href="#icon-fire"></use>
							</svg>
						</span>
						<span className="title-square__small">Акційні пропозиці!</span>
						<span className="title-square__main">Гарячі пропозиції</span>
					</h2>

					<div className="hot-offers__cards" id="hot-offer-products">
						<CardProduct />
						<CardProduct />
						<CardProduct />
					</div>
				</div>
			</div>

			<div className="gallery">
				<div className="container-fill">
					<h2 className="gallery__title title-square">
						<span className="title-square__small">Перегляньте наш:</span>
						<span className="title-square__main">Instagram</span>
					</h2>

					<div className="gallery__items">
						<div className="gallery__item">
							<a href="#" className="gallery__item-hover-box">
								<span className="gallery__item-hash-tag link-hover">#instagram-link</span>
							</a>
							<img src="https://picsum.photos/id/123/270/270" alt="" className="gallery__item-img" />
						</div>
						<div className="gallery__item">
							<a href="#" className="gallery__item-hover-box">
								<span className="gallery__item-hash-tag link-hover">#instagram-link</span>
							</a>
							<img src="https://picsum.photos/id/124/270/270" alt="" className="gallery__item-img" />
						</div>
						<div className="gallery__item">
							<a href="#" className="gallery__item-hover-box">
								<span className="gallery__item-hash-tag link-hover">#instagram-link</span>
							</a>
							<img src="https://picsum.photos/id/125/270/270" alt="" className="gallery__item-img" />
						</div>
						<div className="gallery__item">
							<a href="#" className="gallery__item-hover-box">
								<span className="gallery__item-hash-tag link-hover">#instagram-link</span>
							</a>
							<img src="https://picsum.photos/id/126/270/270" alt="" className="gallery__item-img" />
						</div>
						<div className="gallery__item">
							<a href="#" className="gallery__item-hover-box">
								<span className="gallery__item-hash-tag link-hover">#instagram-link</span>
							</a>
							<img src="https://picsum.photos/id/127/270/270" alt="" className="gallery__item-img" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
