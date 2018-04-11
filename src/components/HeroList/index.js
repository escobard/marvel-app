import React, { Component } from "react"

import styles from "./styles.scss"

export default class extends Component{
	renderHeroes = (heroes) =>{
		return heroes.map(( hero, index ) =>{
			let {name} = hero;
			return(
					<p key={index}>{name}</p>
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