import React, { Component } from "react"
import PropTypes from 'prop-types';

import styles from "./styles.scss"

export default class HeroDetail extends Component{

	render(){
		return(
				<div className="hero-list">
					<p>test</p>
				</div>
			)
	}
}

HeroDetail.defaultProps = {
  hero: []
};

HeroDetail.propTypes = {
  hero: PropTypes.array
};