import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron my-4">
				<h1 className="display-3">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Call to Action!
				</a>
			</div>
		);
	}
}
