import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import { Link } from "react-router-dom";

export default class Hero extends Component {
  render() {
    let { name, description, urls, thumbnail: { path, extension } } = this.props
      .hero.name
      ? this.props.hero
      : { thumbnail: {} };

    let img = `${path}/portrait_medium.${extension}`

    return (
      <Card className="hero-card">
        <CardHeader
          className="header"
          title={name}
          avatar={img}
        />
        <CardText className="description">
          {description
            ? description.substring(0, 40) + "..."
            : "No description available"}
        </CardText>
        <Link to={`/hero/${name}`} className="link" params={this.props}>
          <FlatButton label="Click to expand"/>
        </Link>
      </Card>
    );
  }
}

Hero.defaultProps = {
  hero: {}
};

Hero.propTypes = {
  heroes: PropTypes.object
};