import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    let {name, description, urls, thumbnail: {path, extension}} = this.props.hero
    console.log('HERO', this.props.hero)
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={name}
          subtitle="Subtitle"
          avatar="images/ok-128.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="This toggle controls the expanded state of the component."
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Hero Description" subtitle="Card subtitle" expandable={true} />
        <CardText expandable={true}>
          {description ? description : "No description available :("}
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onClick={this.handleExpand} />
          <FlatButton label="Reduce" onClick={this.handleReduce} />
        </CardActions>
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