import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
	
	render() { 
		return ( 
			<React.Fragment>
				<footer className="footer mt-auto py-3 bg-dark fixed-bottom">
					<div className="container">
						<span className="text-muted">All rights reserved. Sphynx Mining LLC</span>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;