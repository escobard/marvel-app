import React, { Component } from "react"
import PropTypes from 'prop-types';

import styles from "./styles.scss"

import Hero from "./Hero"

export default class HeroList extends Component{

	renderHeroes = (heroes) => {
		return heroes.map(( hero, index ) =>{
			let {name} = hero;
			return(
				<div key={index} className="hero col-md-4">
					<Hero hero={hero}/>
				</div>
				)
		})
	}

	render(){
		let { heroes } = this.props
		console.log('heroes', this.props.heroes)
		return(
				<div className="hero-list">
					<p>Hero list</p>
					{
						heroes.length > 1 
						?	this.renderHeroes(heroes) 
						:	<p>Loading...</p>
					}
				</div>
			)
	}
}

HeroList.defaultProps = {
  heroes: []
};

HeroList.propTypes = {
  heroes: PropTypes.array
};