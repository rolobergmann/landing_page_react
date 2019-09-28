import React from "react";
import { MyNavbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Footer } from "./footer.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<MyNavbar />
					<Jumbotron />
					<div className="row text-center">
						<Card phrase="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." />

						<Card phrase="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." />

						<Card phrase="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque." />

						<Card phrase="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto." />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
