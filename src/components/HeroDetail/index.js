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
	state = {
		stats: ["comics", "events", "series", "stories"]
	};
	renderStats = stats => {
		let { comics, events, series, stories } = this.props.hero;
		return stats.map((item, index) => {
			let findStat = this.props.hero[item];
				return (
					<div className="stat col-md-3">
						<h4>{item}</h4>
						{stat(findStat)}
					</div>
				);
		});
	};
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
					<h2>{name}</h2>
					<CardText>
						{description ? description : "No description available"}
					</CardText>
					<div className="stats">{this.renderStats(this.state.stats)}</div>
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