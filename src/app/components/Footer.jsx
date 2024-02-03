import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="footer">
		<div className="container">
			<Link to="/" className="logo">I-happy</Link>

			<ul className="navbar-nav menu">
				<li className="nav-item menu__li">
					<Link className="nav-link menu__link link-hover" to="/">Каталог</Link>
				</li>
				<li className="nav-item menu__li">
					<Link className="nav-link menu__link link-hover" to="/about">Про нас</Link>
				</li>
				<li className="nav-item menu__li">
					<Link className="nav-link menu__link link-hover" to="/delivery">Доставка і оплата</Link>
				</li>
				<li className="nav-item menu__li">
					<Link className="nav-link menu__link link-hover" to="/contacts">Контакти</Link>
				</li>
			</ul>

			<div className="footer__social">
				<div className="social">
					<Link to="#" rel="nofollow" target="_blank" className="social__item facebook">
						<svg className="icon icon-facebook"><use href="#icon-facebook"></use></svg>
					</Link>
					<Link to="#" rel="nofollow" target="_blank" className="social__item instagram">
						<svg className="icon icon-instagram"><use href="#icon-instagram"></use></svg>
					</Link>
					<Link to="#" rel="nofollow" target="_blank" className="social__item youtube">
						<svg className="icon icon-youtube"><use href="#icon-youtube"></use></svg>
					</Link>
				</div>
			</div>

			<p className="footer__copyright">
				<span>Всі права на статті, ілюстрації, інші матеріали належать site.com та охороняються законом України
					«Про авторське право і суміжні права».<br />При використанні матеріалів посилання на сайт
					обов'язкове!</span>
				<span className="footer__developer">Розробник сайту: <Link to="#" target="_blank">Nataliia</Link></span>
			</p>
		</div>
	</div>

  )
}
