import React, { Component } from 'react';

class QuantityPicker extends Component {
	render() { 
		return ( 
			<div>
				<button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
				<label>QP</label>
			</div>
		);
	}
	increaseQuantity() {
		console.log("button clicked");
	}
}

export default QuantityPicker;