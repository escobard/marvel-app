import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	Card,
	CardActions,
	CardHeader,
	CardMedia,
	CardTitle,
	CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import styles from "./styles.scss";

export default class HeroDetail extends Component {
	renderHero = hero => {
		let {
			comics,
			events,
			description,
			name,
			series,
			stories,
			urls,
			loading
		} = this.props.hero;

		// refactor into helper
		let stat = (stat) => {
			if (stat.available) {
				return stat.available
			}
			return <p>N / A</p>
		}

		return (
			<div>
				<Card>
					<CardMedia>
						<img src="images/nature-600-337.jpg" alt="" />
					</CardMedia>
					<CardTitle title={name} />
					<CardText>
						{description ? description : "No description available"}
					</CardText>
					<div className="stats">
						<div className="stat col-md-3"><h4>Events</h4>{stat(events)}</div>
						<div className="stat col-md-3"><h4>Comics</h4>{stat(comics)}</div>
						<div className="stat col-md-3"><h4>Series</h4>{stat(series)}</div>
						<div className="stat col-md-3"><h4>Stories</h4>{stat(stories)}</div>
					</div>
					<CardActions>
						{urls.map((url, index) => {
							return (
								<a key={index} href={url.url}>
									<FlatButton label={url.type} />
								</a>
							);
						})}
					</CardActions>
				</Card>
			</div>
		);
	};

	render() {
		console.log("HERO", this.props.hero);

		return (
			<div className="hero-list">
				{this.props.hero ? this.renderHero(this.props.hero) : null}
			</div>
		);
	}
}

HeroDetail.defaultProps = {
	hero: {}
};

HeroDetail.propTypes = {
	hero: PropTypes.object
};