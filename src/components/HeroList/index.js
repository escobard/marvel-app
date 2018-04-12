import React, { Component } from "react";
import PropTypes from "prop-types";

import TextField from "material-ui/TextField";

import styles from "./styles.scss";

import Hero from "./Hero";

export default class HeroList extends Component {
	constructor(props) {
		super(props);
		this.state = { input: '', results: []};
	}

	handleInput = (event) =>{
		this.setState({
      input: event.target.value
    });
    this.filterHeroes(this.state.input, this.props.heroes)
	}

	filterHeroes = (input, heroes) =>{
		let results = heroes.filter(hero => hero.name.toLowerCase().indexOf(input)>-1)
		this.setState({
			results
		})
	}

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
		let { results } = this.state;
		const underlineStyle = {
    borderColor: "#003c8f",
  }
		return (
			<div className="hero-list">
				<div>
					<TextField
						className="search"
						hintText="Any name will do..."
						floatingLabelText="Search for the name of your favorite infinity war hero!"
						value={this.state.input}
						onChange={this.handleInput}
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={underlineStyle}
					/>
				</div>
				{results.length > 1 ? this.renderHeroes(results) : null}
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