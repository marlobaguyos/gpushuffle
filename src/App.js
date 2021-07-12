import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer.jsx';
import QuantityPicker from './components/quantityPicker.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
		<div className="App">
			<NavBar></NavBar>
			<h1>GPU Shuffle!</h1>

			<QuantityPicker></QuantityPicker>

			<Footer></Footer>
		</div>
  );
}

export default App;
