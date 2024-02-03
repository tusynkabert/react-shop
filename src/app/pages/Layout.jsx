import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import CartAddedList from "../components/cart/CartAddedList";

export default function Layout() {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
			<CartAddedList />
		</>
	);
}
