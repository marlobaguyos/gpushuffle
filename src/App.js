import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer.jsx';
import QuantityPicker from './components/quantityPicker';
import Product from './components/product.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
		<div className="App">
			<NavBar></NavBar>

			<h1 className="mainHeader">GPU Shuffle!</h1>

			<QuantityPicker></QuantityPicker>

			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>
			<Product></Product>

			<Footer></Footer>
		</div>
  );
}

export default App;
