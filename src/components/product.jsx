import React, { Component } from 'react';
import QuantityPicker from 'components/QuantityPicker';

class Products extends Component {
	state = {  }
	render() { 
		return ( 
			<div>
				I'm a product!!
				<QuantityPicker></QuantityPicker>
				
			</div>
		);
	}
}

export default Products;