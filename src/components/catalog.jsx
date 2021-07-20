import React, { Component, createContext } from 'react';
import Products from './product';

class Catalog extends Component {
	render() { 
		return ( 
			<div className="catalog-page">
				<h3>Mining Time</h3>

				<Products></Products>
				<Products></Products>
				<Products></Products>
				<Products></Products>

			</div>
		);
	}
}

export default Catalog;