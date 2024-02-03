import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	// Переключалка бургера
	const [showBurger, setShowBurger] = useState(false);

	// Функція для події onChange
	const toggleBurger = () => setShowBurger(!showBurger);

	return (
		<div className="navigation">
			<div className="container">
				<div className="navigation__hold">
					<div className={`navigation__left navigation__links ${showBurger ? "show" : ""}`}>
						<ul className="menu navigation__item-list">
							<li className="menu__li navigation__item">
								<Link to="/" className="menu__link link-hover">
									Головна
								</Link>
							</li>
							<li className="menu__li navigation__item">
								<Link to="/delivery" className="menu__link link-hover">
									Доставка і оплата
								</Link>
							</li>
							<li className="menu__li navigation__item">
								<Link to="/contacts" className="menu__link link-hover">
									Контакти
								</Link>
							</li>
						</ul>
					</div>
					<div className="navigation__middle">
						<Link to="/" className="logo">
							I-happy
						</Link>
					</div>
					<div className="navigation__right">
						<ul className="navigation__item-list">
							<li className="navigation__item">
								<Link to="/search" className="navigation__item-link">
									<svg className="icon icon-search">
										<use href="#icon-search"></use>
									</svg>
								</Link>
							</li>
							<li className="navigation__item">
								<Link to="/order" className="navigation__item-link">
									<span className="cart-added-summ js-cart-added-summ">0</span>
									<svg className="icon icon-cart-bag">
										<use href="#icon-cart-bag"></use>
									</svg>
								</Link>
							</li>
							<li className="navigation__item">
								<Link to="/login" className="navigation__item-link">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-user">
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</Link>
							</li>
							<li className="navigation__item hide-pc">
								<label className="hamburger">
									<input type="checkbox" onChange={toggleBurger} />
									<svg viewBox="0 0 32 32">
										<path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
										<path className="line" d="M7 16 27 16"></path>
									</svg>
								</label>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
