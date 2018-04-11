import React, { Component } from "react"

import styles from "./styles.scss"

export default class extends Component{
	render(){
		console.log('heroes', this.props.heroes)
		return(
				<div className="hero-list">
					<p>Hero list</p>
				</div>
			)
	}
}