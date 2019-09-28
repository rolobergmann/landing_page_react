import React from "react";
import PropTypes from "prop-types";

export class Card extends React.Component {
	render() {
		return (
			<div className="col-lg-3 col-md-6 mb-4">
				<div className="card h-100">
					<img
						src="http://placehold.it/500x325"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">{this.props.phrase}</p>
					</div>
					<div className="card-footer">
						<a href="#" className="btn btn-primary">
							Find Out More!
						</a>
					</div>
				</div>
			</div>
		);
	}
}
Card.propTypes = {
	phrase: PropTypes.string.isRequired
};
