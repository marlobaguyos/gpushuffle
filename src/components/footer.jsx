import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	
	render() { 
		return ( 
			<React.Fragment>
				<footer className="footer-name">2021 All rights reserved</footer>
				<label className="footer-cr">GPUSHUFFLE LLC</label>
			</React.Fragment>
		);
	}
}

export default Footer;