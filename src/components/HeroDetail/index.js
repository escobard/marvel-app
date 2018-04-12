import React, { Component } from "react";
import { Link } from "react-router-dom";
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

import { img } from "../../utils";
import { stat } from "./utils";

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
			thumbnail: { path, extension },
			loading
		} = this.props.hero.name ? this.props.hero : { thumbnail: {} };
		return (
			<div>
				<Card>
					<CardMedia>
						<img
							src={img(path, "landscape_incredible", extension)}
							alt={`${name}'s image`}
						/>
					</CardMedia>
					<h1>{name}</h1>
					<CardText>
						{description ? description : "No description available"}
					</CardText>
					<div className="stats">
						<div className="stat col-md-3">
							<h4>Events</h4>
							{stat(events)}
						</div>
						<div className="stat col-md-3">
							<h4>Comics</h4>
							{stat(comics)}
						</div>
						<div className="stat col-md-3">
							<h4>Series</h4>
							{stat(series)}
						</div>
						<div className="stat col-md-3">
							<h4>Stories</h4>
							{stat(stories)}
						</div>
					</div>
					<div className="bottom">
						<div className="breadcrumbs">
							<Link to="/" className="link">
								<FlatButton label="Home" />
							</Link>
							<span> / </span>
							<Link to={`/hero/${name}`} className="link">
								<FlatButton label={name} />
							</Link>
						</div>
						<CardActions className="quick-links">
							{urls.map((url, index) => {
								return (
									<a key={index} href={url.url}>
										<FlatButton label={url.type} />
									</a>
								);
							})}
						</CardActions>
					</div>
				</Card>
			</div>
		);
	};

	render() {
		return (
			<article className="hero-detail">
				{this.props.hero ? this.renderHero(this.props.hero) : null}
			</article>
		);
	}
}

HeroDetail.defaultProps = {
	hero: {}
};

HeroDetail.propTypes = {
	hero: PropTypes.object
};