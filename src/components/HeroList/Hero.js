import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    let { name, description, urls, thumbnail: { path, extension } } = this.props.hero.name
      ? this.props.hero
      : { thumbnail: {} };
    return (
      <Card
        className="hero-card"
      >
        <CardHeader
          title={name}
          subtitle="Subtitle"
          avatar="images/ok-128.jpg"
        />
          <FlatButton label="Click to expand" />
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