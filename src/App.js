import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Catalog from './components/catalog';


function App() {
  return (
		<div className="App">
			<NavBar></NavBar>

			<h1 className="mainHeader">GPU Shuffle!</h1>

			<Catalog></Catalog>

			<Footer></Footer>
		</div>
  );
}

export default App;
