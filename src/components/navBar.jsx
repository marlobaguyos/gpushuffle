import React, { Component } from 'react';

class NavBar extends Component {
	state = {  }
	render() { 
		return ( 
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Sphynx Mining</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Products</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Graphics Cards</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Mining Rigs</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Power Supplies</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;