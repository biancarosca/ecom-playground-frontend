import { useEffect } from "react";
import axios from "axios";

function App() {
	useEffect(() => {
		const fetchProducts = async () => {
			const res = await axios.get("http://localhost:5000/api/products");
			console.log(res);
		};

		fetchProducts();
	}, []);

	return (
		<div className="App">
			<h1>Menu</h1>
		</div>
	);
}

export default App;
