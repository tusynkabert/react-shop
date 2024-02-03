export default function Order() {
	return (
		<div className="article">
			<div className="container">
				<h2 className="article__title">Форма замовлення:</h2>

				<div className="page-content">
					<form class="order-form hidden">
						<div className="form-group">
							<label for="name">Ім'я:</label>
							<input type="text" id="name" name="name" className="form-control" required />
						</div>

						<div className="form-group">
							<label for="phone">Телефон:</label>
							<input type="tel" id="phone" name="phone" className="form-control" required />
						</div>

						<div className="form-group">
							<label for="address">Адреса доставки:</label>
							<input type="text" id="address" name="address" className="form-control" required />
						</div>

						<button type="submit" className="btn">
							Оформити замовлення
						</button>
					</form>

					<h2 className="form-success hidden">Замовлення успішно відправлено!</h2>

					<h2 className="form-empty">Корзина пуста!</h2>
				</div>
			</div>
		</div>
	);
}
