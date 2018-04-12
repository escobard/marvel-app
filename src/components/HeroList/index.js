import React, { Component } from "react";
import PropTypes from "prop-types";

import TextField from "material-ui/TextField";

import styles from "./styles.scss";

import Hero from "./Hero";

export default class HeroList extends Component {
	renderHeroes = heroes => {
		return heroes.map((hero, index) => {
			let { name } = hero;
			return (
				<article key={index} className="hero col-md-4 col-sm-12">
					<Hero hero={hero} />
				</article>
			);
		});
	};

	render() {
		let { heroes } = this.props;
		console.log("heroes", this.props.heroes);
		return (
			<div className="hero-list">
				<div >
					<TextField className="search"
						hintText="Any name will do..."
						floatingLabelText="Type in the name of a hero fighting in the infinity war!"
					/>
				</div>
				{heroes.length > 1 ? this.renderHeroes(heroes) : <p>Loading...</p>}
			</div>
		);
	}
}

HeroList.defaultProps = {
	heroes: []
};

HeroList.propTypes = {
	heroes: PropTypes.array
};