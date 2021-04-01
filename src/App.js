import { useEffect, useState } from "react";
import axios from "axios";
import notificationSound from "./assets/notification.mp3";
import { io } from "socket.io-client";

function App() {
	
	const [products, setProducts] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [newProducts, setNewProducts] = useState([]);

	useEffect(() => {
		const audio = new Audio(notificationSound);
		const socket = io("https://ecom-playground-api.herokuapp.com");
		socket.on("connect", () => {
			console.log("connection established");
		});
		socket.on("message", (data) => {
			console.log(data);
			setNewProducts((prev) => [...prev, data.fullDocument]);
			audio.play();
		});
		const fetchProducts = async () => {
			try {
				const res = await axios.get(
					"https://ecom-playground-api.herokuapp.com/api/products"
				);
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProducts();
	}, []);

	const addProduct = async () => {
		try {
			const res = await axios.post("https://ecom-playground-api.herokuapp.com/api/products", {
				title,
				description,
				price,
			});
			setProducts((prev) => [...prev, res.data.product]);
			setTitle("");
			setDescription("");
			setPrice("");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<h1>Menu</h1>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<br />
			<textarea
				placeholder="Description"
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="Price"
				value={price}
				onChange={(event) => setPrice(event.target.value)}
			/>
			<br />
			<button onClick={addProduct}>Add</button>
			<ul>
				{products.map((product, idx) => (
					<li key={idx}>
						{product && product.title},{product && product.description},
						{product && product.price}
					</li>
				))}
			</ul>
			<h1>New products</h1>
			<ul>
				{newProducts.map((product, idx) => (
					<li key={idx}>
						{product && product.title},{product && product.description},
						{product && product.price}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
