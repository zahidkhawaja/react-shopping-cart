import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from "../src/contexts/ProductContext";
import { CartContext } from "../src/contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = item => {
		setCart(cart.filter(product => product.id !== item.id));
	}

	return (
		<div className="App">
			<ProductContext.Provider value = {{ products, addItem, removeItem }}>
			<CartContext.Provider value = {cart}>
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
