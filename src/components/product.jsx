import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';


class Products extends Component {
	state = {  }
	render() { 
		return ( 
			<div>
				<img src="https://i0.wp.com/1stminingrig.com/wp-content/uploads/2018/03/MSI-GTX-1060-3GB-Mining-Rig-Ravencoin-Mining-Hashrate.jpg?fit=2000%2C972&ssl=1"></img>

				<QuantityPicker></QuantityPicker>

				<label>Product Description here</label>
				<label>$ Total</label>
				<label>$ Price</label>
				
			</div>
		);
	}
}

export default Products;