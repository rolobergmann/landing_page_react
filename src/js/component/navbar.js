import React from "react";

export class MyNavbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Boostratp
					</a>
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
